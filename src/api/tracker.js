import axios from 'axios';
import keys from '../../keystore';
import AsyncStorage from '@react-native-community/async-storage';

const instance = axios.create({
  baseURL: keys.BASE_URL,
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

export default instance;