import React, { useState } from 'react';
import './ProfileState.css'
const ProfileState = () => {
  const [city, setCity] = useState();
  const [state, setState] = useState();

  const cityHandler = (event) => {
    const getCity = event.target.value;
    if (/^[A-Za-z]*$/.test(getCity)) {
      setCity(getCity);
    }
  };

  const stateHandler = (event) => {
    const getState = event.target.value;
    if (/^[A-Za-z]*$/.test(getState)) {
      setState(getState);
    }
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
