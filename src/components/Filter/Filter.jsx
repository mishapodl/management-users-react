import React from 'react';

export const Filter = ({ onChange, search }) => {
  return <input type='text' value={search} onChange={onChange} />;
};
