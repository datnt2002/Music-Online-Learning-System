import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { API_ERROR, TOKEN } from '../constants';
import { getAccessToken } from './auth.service';

const axiosClient = axios.create({
  baseURL: 'http://localhost:3000/api/',
  // baseURL: 'http://www.eschoolhub.click/',
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  async function (config) {
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
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // Show error
    const originalRequest = error.config;
    console.log('interceptor', error.response.data);
    switch (error.response.data.status) {
      case 400:
        Swal.fire({
          title: 'Error!',
          text: error.response.data.message || API_ERROR.DEFAULT,
          icon: 'error',
          confirmButtonText: 'Got it!',
        });
        break;
      case 401:
        Swal.fire({
          title: 'Error!',
          text: error.response.data.message || API_ERROR.DEFAULT,
          icon: 'error',
          confirmButtonText: 'Got it!',
        });
        break;
      case 403 && error.response.data.errors === 'token expired':
        try {
          //call api get new access token
          const result = await getAccessToken();
          //set new token to session storage
          sessionStorage.setItem(TOKEN.ACCESS_TOKEN, result.data);
          //set new header with new token
          originalRequest.headers['Authorization'] = `Bearer ${result.data}`;
          //resend the original request
          axios(originalRequest);
        } catch (error) {
          console.log(error);
        }
        break;
      case 403:
        Swal.fire({
          title: 'Error!',
          text: error.response.data.message || API_ERROR.DEFAULT,
          icon: 'error',
          confirmButtonText: 'Got it!',
        });
        break;
      case 404:
        Swal.fire({
          title: 'Error!',
          text: error.response.data.message || API_ERROR.DEFAULT,
          icon: 'error',
          confirmButtonText: 'Got it!',
        });
        break;
      case 409:
        Swal.fire({
          title: 'Error!',
          text: error.response.data.message || API_ERROR.DEFAULT,
          icon: 'error',
          confirmButtonText: 'Got it!',
        });
        break;
      case 500:
        Swal.fire({
          title: 'Error!',
          text: error.response.data.message || API_ERROR.DEFAULT,
          icon: 'error',
          confirmButtonText: 'Got it!',
        });
        break;

      default:
        Swal.fire({
          title: 'Error!',
          text: API_ERROR.DEFAULT,
          icon: 'error',
          confirmButtonText: 'Got it!',
        });
        break;
    }
    return error.response;
  }
);

export default axiosClient;
