import React from 'react';
import { Clock, Logo, Navigation } from './../../components';
import { useSelector, useDispatch } from 'react-redux';
import './Header.scss';
import { setUnActiveProfile } from '../../redux/actions';

export const Header = () => {
  const { users, countPinedUsers, activeProfile } = useSelector(
    state => state.users
  );
  const dispatch = useDispatch();
  const onUnActiveProfile = () => {
    dispatch(setUnActiveProfile());
  };

  return (
    <header className='header'>
      <div className='bg-overlay'></div>
      <div className='header-content'>
        <div className='top-header'>
          <Logo />
          <Navigation
            activeProfile={activeProfile}
            onUnActiveProfile={onUnActiveProfile}
          />
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
