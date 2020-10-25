import React from 'react';
import { Clock, Logo, Navigation } from './../../components';
import { useSelector } from 'react-redux';
import './Header.scss';

export const Header = () => {
  const { users, countPinedUsers } = useSelector(state => state.users);
  return (
    <header className='header'>
      <div className='bg-overlay'></div>
      <div className='header-content'>
        <div className='navigation'>
          <Logo />
          <Navigation />
        </div>
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
