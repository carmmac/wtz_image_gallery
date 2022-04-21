/* eslint-disable no-console */
import { MutationType } from './mutations';

const ActionType = {
  FETCH_PHOTOS: 'fetchPhotos',
};

const actions = {
  [ActionType.FETCH_PHOTOS]: async ({ commit }) => {
    try {
      const response = await fetch(
        'https://api.unsplash.com/photos/?client_id=cJpFuZeZgYr52cfiuHMIN4raxKQkI9MLy1vvdPfzUsU',
      );
      if (response.ok) {
        const data = await response.json();
        commit(MutationType.SET_DATA_LOAD_INDICATOR, true);
        commit(MutationType.SET_PHOTOS, data);
      } else {
        console.error(`Request failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error(`Server error: ${error.message}`);
    }
  },
};

export { ActionType, actions };
