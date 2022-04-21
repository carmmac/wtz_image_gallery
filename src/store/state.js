const State = {
  PHOTOS: 'photos',
  IS_DATA_LOADED: 'isDataLoaded',
};

const initialState = {
  [State.PHOTOS]: [],
  [State.IS_DATA_LOADED]: false,
};

const state = initialState;

export { State, state };
