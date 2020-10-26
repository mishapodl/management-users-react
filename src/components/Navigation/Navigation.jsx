import React from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';

export const Navigation = ({ activeProfile, onUnActiveProfile }) => {
  return (
    <div className='navigation'>
      <div className='nav-bar'>
        <span>Navigation</span>
      </div>
      {activeProfile && (
        <Link to='/' className='link-home' onClick={onUnActiveProfile}>
          Back
        </Link>
      )}
    </div>
  );
};
