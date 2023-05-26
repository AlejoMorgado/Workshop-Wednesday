import React, { useState } from 'react'

const Input = () => {
  const [number, setNumber] = useState("");
  
  const handlerInput = (event) => {
    const inputNumber = event.target.value;
    if (!isNaN(inputNumber)) {
      setNumber(inputNumber);
    }
  }
  return (
    <div>
      <label>Phone</label>
      <input  value={number} onChange={handlerInput}/>
    </div>
  )
}

export default Input