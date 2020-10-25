import React from 'react';
import { Link } from 'react-router-dom';

export const UserItem = ({ user, onPinUser, onUnPinUser, time }) => {
  const { name, active, login, picture } = user;
  return (
    <>
      <Link
        to={{
          pathname: `/user/${login.username}`,
          state: { user: user },
        }}
      >
        <img src={picture.thumbnail} alt={login.username} />
        {name.first} {name.last}
      </Link>
      <button
        className={`btn-${active ? 'un-pin' : 'pin'}`}
        onClick={!active ? onPinUser : onUnPinUser}
        data-id={login.username}

      />
      {time && <span>{time}</span>}
    </>
  );
};
