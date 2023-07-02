import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { API_ERROR } from '../constants';

const axiosClient = axios.create({
  baseURL: 'http://localhost:3000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // Show error
    console.log('eerroreor', error.response.data);
    switch (error.response.data.code) {
      case 401:
        Swal.fire({
          title: 'Error!',
          text: error.response.data.message || API_ERROR.DEFAULT,
          icon: 'error',
          confirmButtonText: 'Got it!',
        });
        break;
      case 500:
        break;
      default:
        break;
    }
    return error.response;
  }
);

// export const get = async (api, options = {}) => {
//   const response = await axiosClient.get(api, options);
//   return response.data;
// };

// export const post = async (api, options = {}) => {
//   const response = await axiosClient.post(api, options);
//   return response.data;
// };

// export const put = async (api, options = {}) => {
//   const response = await axiosClient.put(api, options);
//   return response.data;
// };

// const API_SERVICE = {
//   post,
//   get,
//   put,
// };

// export default API_SERVICE;
export default axiosClient;
