import { FETCH, USER } from '../constants';

export const fetchInit = () => ({
  type: FETCH.INIT,
});

export const fetchSuccess = payload => ({
  type: FETCH.SUCCESS,
  payload,
});

export const fetchFailure = () => ({
  type: FETCH.FAILURE,
});

export const fetchLoad = (payload = false) => ({
  type: FETCH.LOAD,
  payload,
});

export const setPinUser = payload => ({
  type: USER.PIN,
  payload,
});

export const setUnPinUser = payload => ({
  type: USER.UN_PIN,
  payload,
});

export const setActiveProfile = () => ({
  type: USER.ACTIVE_PROFILE,
});

export const setUnActiveProfile = () => ({
  type: USER.UN_ACTIVE_PROFILE,
});
