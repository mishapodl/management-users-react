import React from 'react';

export const Button = ({ onClick, title, className }) => {
  return (
    <button onClick={onClick} className={`btn btn-${className}`}>
      {title}
    </button>
  );
};
