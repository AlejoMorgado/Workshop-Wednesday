import React, { useState } from 'react';

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <div className="toggle">
    <h2>Toggle</h2>
      <button onClick={handleToggle}>{isOn ? 'On' : 'Off'}</button>
    </div>
  );
};

export default Toggle;
