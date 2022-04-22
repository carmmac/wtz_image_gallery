import { State } from './state';

const MutationType = {
  SET_PHOTOS: 'SET_PHOTOS',
  SET_GALLERY_LOAD_INDICATOR: 'SET_GALLERY_LOAD_INDICATOR',
  SET_USER_LOAD_INDICATOR: 'SET_USER_LOAD_INDICATOR',
  SET_USER_PROFILE: 'SET_USER_PROFILE',
  CLEAR_USER_DATA: 'CLEAR_USER_DATA',
};

const mutations = {
  [MutationType.SET_PHOTOS]: (state, payload) => {
    state[State.PHOTOS] = payload;
  },
  [MutationType.SET_GALLERY_LOAD_INDICATOR]: (state) => {
    state[State.IS_DATA_LOADED] = true;
  },
  [MutationType.SET_USER_LOAD_INDICATOR]: (state) => {
    state[State.IS_USER_LOADED] = true;
  },
  [MutationType.SET_USER_PROFILE]: (state, payload) => {
    state[State.USER_PROFILE] = payload;
  },
  [MutationType.CLEAR_USER_DATA]: (state) => {
    state[State.IS_USER_LOADED] = false;
    state[State.USER_PROFILE] = undefined;
  },
};

export { MutationType, mutations };
