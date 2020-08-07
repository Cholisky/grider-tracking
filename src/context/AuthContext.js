import AsyncStorage from '@react-native-community/async-storage';
import { navigate } from '../navigationRef';
import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'auth_error':
      return { ...state, errorMessage: action.payload };
    case 'clear_auth_error':
      return { ...state, errorMessage: '' };
    case 'auth_success':
      return { errorMessage: '', token: action.payload };
    case 'signout':
      return { errorMessage: '', token: null };
    default:
      return state;
  }
};

const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerAPI.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token, null);
    dispatch({ type: 'auth_success', payload: response.data.token });
    navigate('TrackList');
  } catch (error) {
    dispatch({ type: 'auth_error', payload: 'Something went wrong with sign up' });
  }
};

const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerAPI.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data.token, null);
    dispatch({ type: 'auth_success', payload: response.data.token });
    navigate('TrackList');
  } catch (error) {
    dispatch({ type: 'auth_error', payload: 'Something went wrong with sign in' });
  }
};

const signout = dispatch => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout_success' });
  navigate('loginFlow');
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_auth_error' });
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'auth_success', token });
    navigate('TrackList');
  } else {
    navigate('Signup');
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signup,
    signin,
    signout,
    clearErrorMessage,
    tryLocalSignin,
  },
  { token: null, errorMessage: '' },
);
