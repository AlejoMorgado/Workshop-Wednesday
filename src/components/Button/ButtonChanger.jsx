import React, { useState } from 'react';
import './ButtonChanger.css'
const ButtonChanger = () => {
  const [color, setColor] = useState("red");

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className='container' style={{ backgroundColor: color }}>
      <h3>The color is {color}</h3>
      <div>
      <button onClick={() => changeColor("Aquamarine")}>Aquamarine</button>
      <button onClick={() => changeColor("BlueViolet")}>BlueViolet</button>
      <button onClick={() => changeColor("Chartreuse")}>Chartreuse</button>
      <button onClick={() => changeColor("CornFlowerBlue")}>CornFlowerBlue</button>
      </div>
    </div>
  );
};

export default ButtonChanger;
