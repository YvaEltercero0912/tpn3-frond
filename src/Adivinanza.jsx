import React, { useState } from 'react';

export function Adivinanza() {



  const [aleatorio, ] = useState(numberRandom())

  const [adivina, setadivina] = useState("")

  const [respuesta, setrespuesta] = useState("")

  function numberRandom () { 
    return Math.floor(Math.random() * 10) + 1;

  } 
  const controladiv = () => {
    const numerocorrecto = parseInt(adivina)
    if (numerocorrecto === aleatorio){
      setrespuesta("¡El número ingresado es correcto!")

    } else if  (numerocorrecto != aleatorio) {
        setrespuesta("¡El número ingresado es incorrecto!")}


  }


  return (
    <div className='Adivina'>
      <p>Adivina un número entre 1 y 10</p>
        <input
          type="number"
          value={adivina}
          onChange={ (e) => setadivina(e.target.value) }
          min="1"
          max="10"
          required
        />
        <button onClick={controladiv}>Adivinar</button>
      <p>{respuesta}</p>

    </div>
  );
}
