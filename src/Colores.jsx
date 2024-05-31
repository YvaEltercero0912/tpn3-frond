import React, { useState } from 'react'
import'./style.css'




export const Colores = () => {
    const [hex, setHex] =useState('#ffffff');
  const  randomizedHex =()=>{
    const randomColor='#'+ Math.floor(Math.random()* 16777215).toString(16)
  
  setHex(randomColor);
  
  };  
    return (
      <div className='botonColor'
      style={{backgroundColor: `${hex}`,  overflow: 'hidden', zoom: 1, }}
      >
       
        <button onClick={randomizedHex}>Randomize</button>
      </div>
    )
}