import React, { useState } from 'react';
import './ProfileState.css'
const ProfileState = () => {
  const [city, setCity] = useState();
  const [state, setState] = useState();

  const cityHandler = (event) => {
    const getCity = event.target.value;
    if (isAlphabetic(getCity)) {
      setCity(getCity);
    } else {
      setCity('');
    }
  };

  const stateHandler = (event) => {
    const getState = event.target.value;
    if (isAlphabetic(getState)) {
      setState(getState);
    } else {
      setState('');
    }
  };

  const isAlphabetic = (value) => {
    const letters = /^[A-Za-z]+$/;
    return value.match(letters) !== null;
  };

  return (
    <div className="stateContainer" >
      <div className="formGroup">
        <label>City</label>
        <input value={city} onChange={cityHandler} />
      </div>
      <div className="formGroup">
        <label>State</label>
        <input value={state} onChange={stateHandler} />
      </div>
    </div>
  );
};

export default ProfileState;
