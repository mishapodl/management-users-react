import React from 'react';
import './Logo.scss';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <div className='logo'>
      <Link to='/'>Logo</Link>
    </div>
  );
};
