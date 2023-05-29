import React, { useState } from 'react';

const Increment = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + step);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - step);
  };

  const handleStepChange = (event) => {
    const newStep = parseInt(event.target.value, 10);
    setStep(newStep);
  };

  return (
    <div className="counter">
    <h2>Counter</h2>
      <div className="count">{count}</div>
      <div className="controls">
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <div className="step">
        <label>
          Step:
          <input
            type="number"
            value={step}
            onChange={handleStepChange}
          />
        </label>
      </div>
    </div>
  );
};

export default Increment;
