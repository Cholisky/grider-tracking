import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

const trackReducer = (state, action) => {
  switch (action.type) {
    case 'change_name':
      return state;
    case 'fetch_tracks':
      return action.payload;
    default:
      return state;
  }
};

const fetchTracks = dispatch => async () => {
  const response = await trackerAPI.get('/tracks');
  dispatch({ type: 'fetch_tracks', payload: response.data });
};

const createTrack = dispatch => async (name, locations) => {
  await trackerAPI.post('/tracks', { name, locations });
};


const saveTrack = dispatch => () => {
  dispatch({ type: 'change_name' });
}

export const { Context, Provider } = createDataContext(
  trackReducer,
  {
    fetchTracks,
    createTrack,
  },
  []
);
