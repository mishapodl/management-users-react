import React from 'react';
import { useDispatch } from 'react-redux';
import { setPinUser, setUnPinUser } from '../../redux/actions';
import { UserItem } from './UserItem';
import './UsersList.scss';

export const UsersList = ({ users, tabName }) => {
  const dispatch = useDispatch();

  const onPinUser = e => {
    e.preventDefault();
    const user = {
      id: e.target.dataset.id,
      time: new Date().toLocaleTimeString(),
    };
    dispatch(setPinUser(user));
  };

  const onUnPinUser = e => {
    e.preventDefault();
    const { id } = e.target.dataset;
    dispatch(setUnPinUser(id));
  };

  return (
    <ul className='list'>
      {users.map((user, i) => {
        return (
          <>
            {!tabName && (
              <li key={i}>
                <UserItem
                  user={user}
                  onPinUser={onPinUser}
                  onUnPinUser={onUnPinUser}
                />
              </li>
            )}
            {tabName === 'active' && user.active && (
              <li key={i}>
                <UserItem
                  user={user}
                  onPinUser={onPinUser}
                  onUnPinUser={onUnPinUser}
                  time={user.time}
                />
              </li>
            )}
          </>
        );
      })}
    </ul>
  );
};
