import axios from "axios";
import {API_BASE_URL,TIME_OUT,API_HOST,API_KEY} from '../Config/Config';

axios.defaults.headers.common['Content-Type']='application/json';
axios.defaults.headers.common['Accept']='application/json';

export const axiosInstance=axios.create({
  headers: {
    'X-RapidAPI-Key':API_KEY,
    'X-RapidAPI-Host': API_HOST
  },
    baseURL:API_BASE_URL,
    timeout:TIME_OUT
});