import React from 'react';
import { Link } from 'react-router-dom';
import './UserItem.scss';

export const UserItem = ({
  user,
  onPinUser,
  onUnPinUser,
  onGoToProfile,
  time,
}) => {
  const { name, active, login, picture } = user;
  return (
    <>
      <Link
        to={{
          pathname: `/user/${login.username}`,
          state: { user: user },
        }}
        className='user'
      >
        <span className='user-data' onClick={onGoToProfile}>
          <span className='user-img'>
            <img src={picture.thumbnail} alt={login.username} />
          </span>
          <span className='user-name'>
            {name.first} {name.last}
          </span>
        </span>
        <span className='time-data'>
          <button
            className={`btn-${active ? 'pin' : 'un-pin'}`}
            onClick={!active ? onPinUser : onUnPinUser}
            data-id={login.username}
          />
          {time && <span className='time'>{time}</span>}
        </span>
      </Link>
    </>
  );
};
