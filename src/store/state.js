const State = {
  PHOTOS: 'photos',
  IS_DATA_LOADED: 'isDataLoaded',
  IS_USER_LOADED: 'isUserLoaded',
  USER_PROFILE: 'userProfile',
};

const initialState = {
  [State.PHOTOS]: [],
  [State.IS_DATA_LOADED]: false,
  [State.IS_USER_LOADED]: false,
  [State.USER_PROFILE]: undefined,
};

const state = initialState;

export { State, state };
