import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchInit,
  fetchSuccess,
  fetchFailure,
} from './../redux/actions';

export const useDataApi = query => {
  const { isLoad } = useSelector(
    state => state.users
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchInit());
      try {
        console.log('success')
        const result = await axios(query);
        dispatch(fetchSuccess(result.data));
      } catch (error) {
        console.log('failure')
        dispatch(fetchFailure());
      }
    };

    isLoad && fetchData();
  }, [dispatch, query, isLoad]);
};
