
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Detección de entorno para renderizado
const renderMethod = import.meta.env.SSR ? ReactDOM.hydrateRoot : ReactDOM.createRoot

// Renderizar la aplicación
const app = document.getElementById('root') as HTMLElement
renderMethod(app).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Exportación para SSG
export { App }
