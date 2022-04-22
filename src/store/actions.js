/* eslint-disable no-console */
import { ACCESS_KEY } from '@/const';
import { createApi } from 'unsplash-js';
import { MutationType } from './mutations';

const api = createApi({
  accessKey: ACCESS_KEY,
});

const ActionType = {
  FETCH_PHOTOS: 'fetchPhotos',
};

const actions = {
  [ActionType.FETCH_PHOTOS]: async ({ commit }) => {
    try {
      const { response } = await api.photos.list({ page: 1, perPage: 8 });
      commit(MutationType.SET_GALLERY_LOAD_INDICATOR, true);
      commit(MutationType.SET_PHOTOS, response.results);
    } catch (error) {
      console.error(`Server error: ${error.message}`);
    }
    } catch (error) {
      console.error(`Server error: ${error.message}`);
    }
  },
};

export { ActionType, actions };
