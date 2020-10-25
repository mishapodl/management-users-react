import React from 'react';

export const TabsUsers = ({ onClick, tabName }) => {
  return (
    <div className='tabs users-tabs'>
      <button
        onClick={onClick}
        data-tab=''
        className={`tab ${!tabName && 'tab-active'}`}
      >
        All
      </button>
      <button
        onClick={onClick}
        data-tab='active'
        className={`tab ${tabName && 'tab-active'}`}
      >
        Active
      </button>
    </div>
  );
};
