
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency: string = 'AED'): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: currency === 'AED' ? 'AED' : currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
}

export function calculateYearsOfService(startDate: Date, endDate: Date): number {
  const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
  const milliseconds = endDate.getTime() - startDate.getTime();
  return milliseconds / millisecondsPerYear;
}

export function calculateGratuityAmount(
  basicSalary: number,
  yearsOfService: number,
  contractType: 'limitado' | 'ilimitado',
  terminationReason: 'renuncia' | 'despido',
  unpaidDays: number = 0
): number {
  const dailyWage = basicSalary / 30;
  let gratuity = 0;

  if (yearsOfService < 1) {
    return 0; // No gratuity for less than 1 year of service
  }

  if (contractType === 'ilimitado') {
    if (terminationReason === 'renuncia') {
      if (yearsOfService <= 3) {
        gratuity = (7 * dailyWage * yearsOfService);
      } else if (yearsOfService <= 5) {
        gratuity = (14 * dailyWage * yearsOfService);
      } else {
        gratuity = (21 * dailyWage * 5) + (30 * dailyWage * (yearsOfService - 5));
      }
    } else { // Despido
      if (yearsOfService <= 5) {
        gratuity = (21 * dailyWage * yearsOfService);
      } else {
        gratuity = (21 * dailyWage * 5) + (30 * dailyWage * (yearsOfService - 5));
      }
    }
  } else { // Contrato limitado
    if (yearsOfService <= 5) {
      gratuity = (21 * dailyWage * yearsOfService);
    } else {
      gratuity = (21 * dailyWage * 5) + (30 * dailyWage * (yearsOfService - 5));
    }
  }

  // Apply deductions for unpaid days if applicable
  if (unpaidDays > 0) {
    const totalDays = yearsOfService * 365.25;
    const effectiveDays = totalDays - unpaidDays;
    gratuity = gratuity * (effectiveDays / totalDays);
  }

  return gratuity;
}
