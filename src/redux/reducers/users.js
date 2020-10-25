import { FETCH, USER } from '../constants';

const initState = {
  users: [],
  // labeledUsers: [],
  countPinedUsers: 0,
  isLoading: false,
  isFailure: false,
  isLoad: true,
};

// const setPinUser = ({ id, time }, state) => {
//   const user = state.users.find(({ login }) => login.username === id);
//   return (
//     user && {
//       id,
//       time,
//       data: user,
//     }
//   );
// };

// const removePinUser = (data, state) => {
//   return state.users.filter(u => u.login.username !== data.id);
// };

const setPinUser = ({ id, time }, { users }) =>
  users.map(user =>
    user.login.username === id
      ? {
          ...user,
          id,
          time,
          active: true,
        }
      : user
  );
const removePinUser = (id, { users }) =>
  users.map(user =>
    user.login.username === id
      ? {
          ...user,
          active: false,
        }
      : user
  );

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH.INIT:
      return {
        ...state,
        isLoading: true,
        isFailure: false,
      };
    case FETCH.SUCCESS:
      return {
        ...state,
        users: [...state.users, ...action.payload.results],
        isLoading: false,
        isFailure: false,
        isLoad: false,
      };
    case FETCH.FAILURE:
      return {
        ...state,
        isLoading: false,
        isFailure: true,
        isLoad: true,
      };
    case FETCH.LOAD:
      return {
        ...state,
        isLoad: action.payload,
      };
    case USER.PIN:
      return {
        ...state,
        // labeledUsers: [
        //   ...state.labeledUsers,
        //   setPinUser(action.payload, state),
        // ],
        users: setPinUser(action.payload, state),
        countPinedUsers: state.countPinedUsers + 1,
      };
    case USER.UN_PIN:
      return {
        ...state,
        // labeledUsers: [
        //   ...state.labeledUsers,
        //   removePinUser(action.payload, state),
        // ],
        users: removePinUser(action.payload, state),
        countPinedUsers: state.countPinedUsers - 1,
      };
    default:
      return state;
  }
};
