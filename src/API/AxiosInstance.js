import axios from "axios";
import {API_BASE_URL,TIME_OUT} from '../Config/Config';

axios.defaults.headers.common['Content-Type']='application/json';
axios.defaults.headers.common['Accept']='application/json';

export const axiosInstance=axios.create({
    baseURL:API_BASE_URL,
    timeout:TIME_OUT
});