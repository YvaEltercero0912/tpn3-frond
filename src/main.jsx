import React from 'react'
import ReactDOM from 'react-dom/client'
import PrimerComponente  from "./PrimerComponente";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimerComponente nombre='Diaz Daniel Alejandro'
    edad='29'
    descripcion='soy Alejandro tengo 29 años amo hacer deportes y viajar' 
    profesion='Estudiante y Entrenador personal'/>
    
  </React.StrictMode>,
)
