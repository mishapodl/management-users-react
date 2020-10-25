import React from 'react';
import { Clock } from './../../components';
import { useSelector } from 'react-redux';

export const Header = () => {
  const { users, countPinedUsers } = useSelector(state => state.users);
  return (
    <header className='header'>
      <div className='header-content'>
        <div className='clock'>
          <Clock />
        </div>
        <div className='count-active-users'>
          <p>
            Pined users:
            <span className='active-users'>{countPinedUsers}</span>/
            <span className='all-users'>{users.length}</span>
          </p>
        </div>
      </div>
    </header>
  );
};
