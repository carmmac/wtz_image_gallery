import { State } from './state';

const MutationType = {
  SET_PHOTOS: 'setPhotos',
  SET_DATA_LOAD_INDICATOR: 'SET_DATA_LOAD_INDICATOR',
};

const mutations = {
  [MutationType.SET_PHOTOS]: (state, payload) => {
    state[State.PHOTOS] = payload;
  },
  [MutationType.SET_DATA_LOAD_INDICATOR]: (state, payload) => {
    state[State.IS_DATA_LOADED] = payload;
  },
};

export { MutationType, mutations };
