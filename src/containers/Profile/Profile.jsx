import React from 'react';
import { Link } from 'react-router-dom';

export const Profile = props => {
  const {
    id,
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
      <Link to='/'>Home</Link>
      <div id={id}>
        <div>
          <img alt='img' src={picture.thumbnail} />
        </div>
        <ul>
          <li>
            Name: {name.first} {name.last}
          </li>
          <li>
            Address: {location.country} {location.state} {location.city}
          </li>
          <li>Email: {email}</li>
          <li>Gender: {gender}</li>
          <li>DOB: {dob.date}</li>
          <li>Tel: {phone}</li>
        </ul>
      </div>
    </>
  );
};
