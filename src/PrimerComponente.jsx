import React from 'react'
import {Contador} from './Contador.jsx'
import'./style.css'
import { Colores } from './Colores.jsx'
import { Emojis } from './Emoji.jsx'
import { Adivinanza } from './Adivinanza.jsx'


const PrimerComponente = ({nombre, edad, descripcion, profesion}) => {
  return (
    <>
    <div className='Tarjeta-Datos'>
      <h1>Tarjeta de presentación</h1>
      <h3>Nombre:{nombre}</h3>
      <h3>Edad:{edad}</h3>
      <h3>Descripción:{descripcion}</h3>
      <h3>Profesión:{profesion}</h3>
      <Contador/>
      <Colores/>
      
    
   
    </div>
    <div className='Emojis'><Emojis/></div>
  <div><Adivinanza/></div>
   </>
  )
}

export default PrimerComponente
