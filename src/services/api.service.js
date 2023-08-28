import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { API_ERROR } from '../constants';

const axiosClient = axios.create({
  baseURL: 'http://localhost:3000/api/',
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
    console.log('interceptor', error.response.data);
    switch (true) {
      case error.response.data.code === 400:
        Swal.fire({
          title: 'Error!',
          text: error.response.data.message || API_ERROR.DEFAULT,
          icon: 'error',
          confirmButtonText: 'Got it!',
        });
        break;
      case error.response.data.code === 401:
        Swal.fire({
          title: 'Error!',
          text: error.response.data.message || API_ERROR.DEFAULT,
          icon: 'error',
          confirmButtonText: 'Got it!',
        });
        break;
      case error.response.data.code === 403:
        Swal.fire({
          title: 'Error!',
          text: error.response.data.message || API_ERROR.DEFAULT,
          icon: 'error',
          confirmButtonText: 'Got it!',
        });
        break;
      case error.response.data.code === 500:
        Swal.fire({
          title: 'Error!',
          text: error.response.data.message || API_ERROR.DEFAULT,
          icon: 'error',
          confirmButtonText: 'Got it!',
        });
        break;

      default:
        break;
    }
    return error.response;
  }
);

export default axiosClient;
