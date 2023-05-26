import React, { useState } from 'react';
import './ProfileInformation.css'
const ProfileInformation = () => {
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");

  const emailHandler = (event) => {
    const getEmail = event.target.value;
    setEmail(getEmail);
  };

  const contactNumberHandler = (event) => {
    const getContactNumber = event.target.value;
    if (!isNaN(getContactNumber)) {
      setContactNumber(getContactNumber);
    }
  };

  const addressHandler = (event) => {
    const getAddress = event.target.value;
    setAddress(getAddress);
  };

  return (
    <div className='informationContainer'>
      <div className='formGroup' >
        <label>Email</label>
        <input value={email} onChange={emailHandler} />
      </div>
      <div className='formGroup' >
        <label>Contact Number</label>
        <input value={contactNumber} onChange={contactNumberHandler} />
      </div>
      <div className='formGroup' >
        <label>Address</label>
        <input value={address} onChange={addressHandler} />
      </div>
    </div>
  );
};

export default ProfileInformation;
