import Axios from 'axios';
import { API_ENDPOINT } from './api';

const API = Axios.create({
  baseURL: API_ENDPOINT,
  timeout: 120000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage?.getItem('token')}`,
  },
});

export default API;
