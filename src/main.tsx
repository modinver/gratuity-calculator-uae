
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Detección de entorno para renderizado
const app = document.getElementById('root') as HTMLElement

if (import.meta.env.SSR) {
  // En entorno SSR, usar hydrateRoot
  ReactDOM.hydrateRoot(app, 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // En entorno cliente, usar createRoot
  ReactDOM.createRoot(app).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// Exportación para SSG
export { App }
