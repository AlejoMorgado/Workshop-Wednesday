import React, { useState } from 'react';
import './ProfileFullName.css'
const ProfileFullname = () => {
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();

  const nameHandler = (event) => {
    const getName = event.target.value;
    if (/^[A-Za-z]*$/.test(getName)) {
      setName(getName);
    }
  };

  const lastNameHandler = (event) => {
    const getLastName = event.target.value;
    if (/^[A-Za-z]*$/.test(getLastName)) {
      setLastName(getLastName);
    }
  };

  return (
    <div className='fullContainer'>
      <div className='formGroup'>
        <label>First Name</label>
        <input style={{marginRight: 20}} value={name} onChange={nameHandler} />
      </div>
      <div className='formGroup'>
        <label>Last Name</label>
        <input value={lastName} onChange={lastNameHandler} />
      </div>

    </div>
  );
};

export default ProfileFullname;
