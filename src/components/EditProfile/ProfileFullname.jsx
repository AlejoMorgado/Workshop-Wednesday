import React, { useState } from 'react';
import './ProfileFullName.css';

const ProfileFullname = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const nameHandler = (event) => {
    const getName = event.target.value;
    if (isAlphabetic(getName)) {
      setName(getName);
    } else {
      setName('');
    }
  };

  const lastNameHandler = (event) => {
    const getLastName = event.target.value;
    if (isAlphabetic(getLastName)) {
      setLastName(getLastName);
    } else {
      setLastName('');
    }
  };

  const isAlphabetic = (value) => {
    const letters = /^[A-Za-z]+$/;
    return value.match(letters) !== null;
  };

  return (
    <div className='fullContainer'>
      <div className='formGroup'>
        <label>First Name</label>
        <input type='text' style={{ marginRight: 20 }} value={name} onChange={nameHandler} />
      </div>
      <div className='formGroup'>
        <label>Last Name</label>
        <input value={lastName} onChange={lastNameHandler} />
      </div>
    </div>
  );
};

export default ProfileFullname;
