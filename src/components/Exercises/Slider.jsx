import React, { useState } from 'react';

const Slider = ({ min, max }) => {
  const [value, setValue] = useState(min);

  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };

  return (
    <div className="slider">
    <h2>Slider</h2>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
      <span className="value">{value}</span>
    </div>
  );
};

export default Slider;
