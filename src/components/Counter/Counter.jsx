import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const addNumber = () => {
    if (counter < 10 ) {
      setCounter(prevNumber => prevNumber + 1);
      console.log(setCounter);
    }
  };

  const subtractNumber = () => {
    if (counter > 0 ) {
      setCounter(prevNumber => prevNumber - 1);
    }
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={addNumber}>Add</button>
      <button onClick={subtractNumber}>Subtract</button>
    </div>
  );
};

export default Counter;
