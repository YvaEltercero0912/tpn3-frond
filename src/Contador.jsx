import React, { useState } from 'react'
import'./style.css'


 export const Contador = () => {
    const [contador, setContador]=useState(0); 

    const incremento= ()=>{
        setContador(contador+2);
    }

  return (
    <div>
      <button onClick={incremento}>contador:{contador}</button>
    </div>
  )
}




