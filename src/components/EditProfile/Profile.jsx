import React, { useState } from 'react';
import ProfileFullname from './ProfileFullname';
import ProfileInformation from './ProfileInformation';
import ProfileState from './ProfileState';
import ProfileLocation from './ProfileLocation';
import './Profile.css';
import image from '../../images/profile.jpg';

const Profile = () => {

  return (
    <div className="profileWrapper">
      <h1>Edit Profile</h1>
      <img src={image} alt="Profile" />
      <div className="fullName">
        <ProfileFullname />
      </div>
      <ProfileInformation />
      <div className="state">
        <ProfileState />
      </div>
      <div className="location">
        <ProfileLocation />
      </div>
      <label>Password</label>
      <input type="password" />
      <button>Save</button>
    </div>
  );
};

export default Profile;
