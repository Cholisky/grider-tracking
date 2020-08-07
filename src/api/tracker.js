import axios from 'axios';
import keys from '../../keystore';

export default axios.create({
  baseURL: keys.BASE_URL,
});

