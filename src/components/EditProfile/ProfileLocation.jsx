import React, { useState } from 'react'
import './ProfileLocation.css'

const ProfileLocation = () => {
  const [zipCode, setZipCode] = useState();
  const [country, setCountry] = useState();

  const zipCodeHandler = (event) => {
    const getZipCode = event.target.value;
    if (!isNaN(getZipCode)) {
      setZipCode(getZipCode);
    }
  };

  const countryHandler = (event) => {
    const getCountry = event.target.value;
    if (isAlphabetic(getCountry)) {
      setCountry(getCountry);
    } else {
      setCountry('');
    }
  };

  const isAlphabetic = (value) => {
    const letters = /^[A-Za-z]+$/;
    return value.match(letters) !== null;
  };

  return (
    <div className='locationContainer' >
      <div className="formGroup">
        <label>ZipCode</label>
        <input value={zipCode} onChange={zipCodeHandler}></input>
      </div>
      <div className="formGroup">
        <label>Country</label>
        <input value={country} onChange={countryHandler}></input>
      </div>
    </div>
  )
}
export default ProfileLocation