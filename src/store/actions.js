/* eslint-disable no-console */
import { ACCESS_KEY } from '@/const';
import { createApi } from 'unsplash-js';
import { MutationType } from './mutations';

const api = createApi({
  accessKey: ACCESS_KEY,
});

const ActionType = {
  FETCH_PHOTOS: 'fetchPhotos',
  FETCH_USER: 'fetchUser',
};

const actions = {
  [ActionType.FETCH_PHOTOS]: async ({ commit }) => {
    try {
      const { response } = await api.photos.list({ page: 1, perPage: 8 });
      commit(MutationType.SET_GALLERY_LOAD_INDICATOR);
      commit(MutationType.SET_PHOTOS, response.results);
    } catch (error) {
      console.error(`Server error: ${error.message}`);
    }
  },
  [ActionType.FETCH_USER]: async ({ commit }, username) => {
    try {
      const { response } = await api.users.get({ username });
      commit(MutationType.SET_USER_LOAD_INDICATOR);
      commit(MutationType.SET_USER_PROFILE, response);
    } catch (error) {
      console.error(`Server error: ${error.message}`);
    }
  },
};

export { ActionType, actions };
