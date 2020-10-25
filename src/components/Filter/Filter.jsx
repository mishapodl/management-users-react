import React from 'react';
import './Filter.scss';

export const Filter = ({ onChange, search }) => {
  return (
    <input
      type='text'
      value={search}
      onChange={onChange}
      placeholder='Search...'
    />
  );
};
