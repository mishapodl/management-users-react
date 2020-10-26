import React from 'react';
import './Profile.scss';
export const Profile = props => {
  const {
    login,
    gender,
    name,
    location,
    email,
    dob,
    phone,
    picture,
  } = props.location.state.user;
  
  return (
    <>
      <div id={login.username} className='profile-container'>
        <div className='avatar'>
          <img alt={login.username} src={picture.large} />
        </div>
        <ul className='contacts'>
          <li><span>Name:</span> {name.first} {name.last}</li>
          <li><span>Address:</span> {location.country} {location.state} {location.city}</li>
          <li><span>Email:</span> {email}</li>
          <li><span>Gender:</span>{gender}</li>
          <li><span>DOB:</span> {dob.date}</li>
          <li><span>Tel:</span> {phone}</li>
        </ul>
      </div>
    </>
  );
};
