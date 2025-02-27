
import React, { useState } from 'react';
import { differenceInYears, differenceInDays } from 'date-fns';
import { formatCurrency } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

interface CalculationResult {
  gratuity: number;
  basicSalary: number;
  dailyWage: number;
  yearsOfService: number;
  baseGratuity: number;
  additionalGratuity: number;
  deductions: number;
}

const GratuityCalculator = () => {
  const [formData, setFormData] = useState({
    contractType: 'ilimitado',
    startDate: '',
    endDate: '',
    basicSalary: '',
    terminationReason: 'renuncia',
    unpaidDays: '0',
  });

  const [result, setResult] = useState<CalculationResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateGratuity = () => {
    try {
      // Validate inputs
      if (!formData.startDate || !formData.endDate || !formData.basicSalary) {
        toast({
          title: "Error",
          description: "Por favor completa todos los campos requeridos",
          variant: "destructive"
        });
        return;
      }

      const startDate = new Date(formData.startDate);
      const endDate = new Date(formData.endDate);
      const basicSalary = parseFloat(formData.basicSalary);
      const unpaidDays = parseInt(formData.unpaidDays) || 0;

      if (endDate <= startDate) {
        toast({
          title: "Error",
          description: "La fecha de finalización debe ser posterior a la fecha de inicio",
          variant: "destructive"
        });
        return;
      }

      if (basicSalary <= 0) {
        toast({
          title: "Error",
          description: "El salario básico debe ser mayor que cero",
          variant: "destructive"
        });
        return;
      }

      // Calculate years of service
      const years = differenceInYears(endDate, startDate);
      const totalDays = differenceInDays(endDate, startDate);
      const effectiveDays = totalDays - unpaidDays;
      const dailyWage = basicSalary / 30;
      
      let gratuity = 0;
      let baseGratuity = 0;
      let additionalGratuity = 0;

      if (years < 1) {
        // Less than 1 year of service
        gratuity = 0;
      } else if (formData.contractType === 'ilimitado') {
        if (formData.terminationReason === 'renuncia') {
          if (years <= 3) {
            gratuity = (7 * dailyWage * years);
            baseGratuity = gratuity;
          } else if (years <= 5) {
            gratuity = (14 * dailyWage * years);
            baseGratuity = gratuity;
          } else {
            baseGratuity = (21 * dailyWage * 5);
            additionalGratuity = (30 * dailyWage * (years - 5));
            gratuity = baseGratuity + additionalGratuity;
          }
        } else { // Despido
          if (years <= 5) {
            gratuity = (21 * dailyWage * years);
            baseGratuity = gratuity;
          } else {
            baseGratuity = (21 * dailyWage * 5);
            additionalGratuity = (30 * dailyWage * (years - 5));
            gratuity = baseGratuity + additionalGratuity;
          }
        }
      } else { // Contrato limitado
        if (years <= 5) {
          gratuity = (21 * dailyWage * years);
          baseGratuity = gratuity;
        } else {
          baseGratuity = (21 * dailyWage * 5);
          additionalGratuity = (30 * dailyWage * (years - 5));
          gratuity = baseGratuity + additionalGratuity;
        }
      }

      // Adjust for unpaid days
      const adjustmentFactor = effectiveDays / totalDays;
      const deductions = gratuity * (1 - adjustmentFactor);
      gratuity = gratuity * adjustmentFactor;

      setResult({
        gratuity,
        basicSalary,
        dailyWage,
        yearsOfService: years,
        baseGratuity,
        additionalGratuity,
        deductions
      });

      setShowResult(true);
      
      // Smooth scroll to results
      setTimeout(() => {
        const resultsElement = document.getElementById('calculator-results');
        if (resultsElement) {
          resultsElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);

    } catch (error) {
      console.error("Error calculating gratuity:", error);
      toast({
        title: "Error",
        description: "Ha ocurrido un error al calcular la gratificación",
        variant: "destructive"
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateGratuity();
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="glassmorphism p-6 sm:p-8 md:p-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gratuity-900 mb-6 text-center">
          Calculadora de Gratuity UAE
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="contractType" className="block text-sm font-medium text-gray-700">
                Tipo de Contrato
              </label>
              <select
                id="contractType"
                name="contractType"
                value={formData.contractType}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gratuity-500 focus:border-gratuity-500"
              >
                <option value="limitado">Limitado</option>
                <option value="ilimitado">Ilimitado</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="terminationReason" className="block text-sm font-medium text-gray-700">
                Razón de Terminación
              </label>
              <select
                id="terminationReason"
                name="terminationReason"
                value={formData.terminationReason}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gratuity-500 focus:border-gratuity-500"
              >
                <option value="renuncia">Renuncia Voluntaria</option>
                <option value="despido">Despido / Terminación por Empleador</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                Fecha de Inicio de Empleo
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gratuity-500 focus:border-gratuity-500"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                Fecha de Finalización de Empleo
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gratuity-500 focus:border-gratuity-500"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="basicSalary" className="block text-sm font-medium text-gray-700">
                Salario Básico Mensual (AED)
              </label>
              <input
                type="number"
                id="basicSalary"
                name="basicSalary"
                value={formData.basicSalary}
                onChange={handleInputChange}
                placeholder="10,000"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gratuity-500 focus:border-gratuity-500"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="unpaidDays" className="block text-sm font-medium text-gray-700">
                Días sin Pago (Si aplica)
              </label>
              <input
                type="number"
                id="unpaidDays"
                name="unpaidDays"
                value={formData.unpaidDays}
                onChange={handleInputChange}
                placeholder="0"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gratuity-500 focus:border-gratuity-500"
              />
            </div>
          </div>
          
          <div className="pt-4">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gratuity-600 hover:bg-gratuity-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gratuity-500 transition-colors"
            >
              Calcular Gratificación
            </button>
          </div>
        </form>
      </div>
      
      {showResult && result && (
        <div 
          id="calculator-results" 
          className="mt-8 p-6 sm:p-8 md:p-10 glassmorphism animate-fade-in"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gratuity-900 mb-6 text-center">
            Resultado del Cálculo
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gratuity-50 p-6 rounded-lg border border-gratuity-100">
              <h4 className="text-lg font-medium text-gratuity-900 mb-2">
                Su Gratificación Estimada
              </h4>
              <p className="text-3xl font-bold text-gratuity-800">
                {formatCurrency(result.gratuity, 'AED')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-gray-200">
                <h5 className="text-sm font-medium text-gray-700 mb-1">Años de Servicio</h5>
                <p className="text-lg font-semibold text-gray-900">
                  {result.yearsOfService.toFixed(2)} años
                </p>
              </div>
              
              <div className="p-4 rounded-lg border border-gray-200">
                <h5 className="text-sm font-medium text-gray-700 mb-1">Salario Básico</h5>
                <p className="text-lg font-semibold text-gray-900">
                  {formatCurrency(result.basicSalary, 'AED')} / mes
                </p>
              </div>
              
              <div className="p-4 rounded-lg border border-gray-200">
                <h5 className="text-sm font-medium text-gray-700 mb-1">Salario Diario</h5>
                <p className="text-lg font-semibold text-gray-900">
                  {formatCurrency(result.dailyWage, 'AED')} / día
                </p>
              </div>
              
              <div className="p-4 rounded-lg border border-gray-200">
                <h5 className="text-sm font-medium text-gray-700 mb-1">Deducciones (días sin pago)</h5>
                <p className="text-lg font-semibold text-gray-900">
                  {formatCurrency(result.deductions, 'AED')}
                </p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Desglose del Cálculo</h4>
              
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Gratificación Base:</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                      {formatCurrency(result.baseGratuity, 'AED')}
                    </td>
                  </tr>
                  {result.additionalGratuity > 0 && (
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Gratificación Adicional:</td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {formatCurrency(result.additionalGratuity, 'AED')}
                      </td>
                    </tr>
                  )}
                  {result.deductions > 0 && (
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Deducciones (días sin pago):</td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900 text-red-600">
                        -{formatCurrency(result.deductions, 'AED')}
                      </td>
                    </tr>
                  )}
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">Total:</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gratuity-800">
                      {formatCurrency(result.gratuity, 'AED')}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 text-sm text-gray-500">
              <p>
                <strong>Nota:</strong> Este cálculo es una estimación basada en la Ley Laboral de EAU. 
                Los resultados pueden variar según circunstancias específicas. Consulte con un asesor legal 
                para obtener información precisa sobre su caso particular.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GratuityCalculator;
