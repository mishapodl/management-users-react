import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDataApi } from '../../hooks/useDataApi';
import { fetchLoad } from '../../redux/actions';
import { searchGender } from '../../redux/selectors';
import {
  Preloader,
  UsersList,
  Button,
  TabsUsers,
  Filter,
} from '../../components';
import './Users.scss';

export const Users = () => {
  const [tabName, setTabName] = useState('');
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  useDataApi(`https://randomuser.me/api/?results=5`);

  const { isLoading, users } = useSelector(s => s.users);
  const filterUsers = useSelector(searchGender(search));

  const onLoadMore = () => dispatch(fetchLoad(true));
  const onTabsUsers = e => setTabName(e.target.dataset.tab);
  const onFilter = e => setSearch(e.target.value);

  return (
    <section className='users container-users '>
      <TabsUsers onClick={onTabsUsers} tabName={tabName} />
      <div className='users-list'>
        <div className='users-list-filter'>
          <Filter onChange={onFilter} search={search} />
        </div>
        {isLoading ? (
          <Preloader />
        ) : (
          <UsersList users={search ? filterUsers : users} tabName={tabName} />
        )}
      </div>
      <div className='users-load'>
        <Button onClick={onLoadMore} title='Load more' className='load' />
      </div>
    </section>
  );
};
