import { createSelector } from 'reselect';

const search = ({ first, last }, s) => {
  s = s.toLowerCase();
  return (
    first.toLowerCase().indexOf(s) > -1 || last.toLowerCase().indexOf(s) > -1
  );
};

export const searchGender = s =>
  createSelector(
    state => state.users.users,
    users => users.filter(u => search(u.name, s))
  );
