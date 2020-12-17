import { AlertStore } from '../alerts/alert.store';
import Axios from '../../config/axios';

// instantiate store classes here (and only here)
export const alertStore = new AlertStore();

// other services
export const axios = Axios;
