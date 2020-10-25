import React from 'react';
import { useDispatch } from 'react-redux';
import { setPinUser, setUnPinUser } from '../../redux/actions';
import { UserItem } from './UserItem';

export const UsersList = ({ users, tabName }) => {
  const dispatch = useDispatch();

  const onPinUser = e => {
    const user = {
      id: e.target.dataset.id,
      time: new Date().toLocaleTimeString(),
    };
    dispatch(setPinUser(user));
  };

  const onUnPinUser = e => {
    const { id } = e.target.dataset;
    dispatch(setUnPinUser(id));
  };

  return (
    <div>
      <ul>
        {users.map((user, i) => {
          return (
            <li key={i}>
              {!tabName && (
                <UserItem
                  user={user}
                  onPinUser={onPinUser}
                  onUnPinUser={onUnPinUser}
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// {tabName === 'active' && user.active && (
//   <UserItem
//     user={user}
//     onPinUser={onPinUser}
//     onUnPinUser={onUnPinUser}
//     time={user.time}
//   />
// )}
