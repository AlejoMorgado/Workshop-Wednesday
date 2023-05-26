import React from 'react'
import ProfileFullname from './ProfileFullname'
import ProfileInformation from './ProfileInformation'
import ProfileState from './ProfileState'
import ProfileLocation from './ProfileLocation'
import './Profile.css'

const Profile = () => {

  return (
    <div className='profileWrapper'>
      <h1>Edit Profile</h1>
      <img></img>
      <div className='fullName'>
        <ProfileFullname />
      </div>
        <ProfileInformation />
      <div className='state'>
        <ProfileState />
      </div>
      <div className='location'>
        <ProfileLocation />
      </div>
      <label>Password</label>
      <input type='password' ></input>
    </div>
  )
}

export default Profile