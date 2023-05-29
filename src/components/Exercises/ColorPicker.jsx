import React, { useState } from 'react';

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div className="color-picker">
    <h2>Color picker</h2>
      <select value={selectedColor} onChange={handleColorChange}>
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
      <input
        type="text"
        value={selectedColor}
        onChange={handleColorChange}
        placeholder="Enter a color"
      />
      {selectedColor && (
        <div
          className="color-preview"
          style={{ backgroundColor: selectedColor }}
        ></div>
      )}
    </div>
  );
};

export default ColorPicker;
