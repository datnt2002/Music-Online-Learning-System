// baseURL: 'http://localhost:5000/api/',
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { API_ERROR, HOST, TOKEN } from '../constants';
import { getAccessToken } from './auth.service';

import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:5000/api/',
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
    switch (true) {
      case error.response.data.status === 400:
        Swal.fire({
          title: 'Error!',
          text: error.response.data.message || API_ERROR.DEFAULT,
          icon: 'error',
          confirmButtonText: 'Got it!',
        });
        break;
      case error.response.data.status === 401:
        Swal.fire({
          title: 'Error!',
          text: error.response.data.message || API_ERROR.DEFAULT,
          icon: 'error',
          confirmButtonText: 'Got it!',
        });
        break;
      case error.response.data.errors === API_ERROR.TOKEN_EXPIRED:
        try {
          //call api get new access token
          const result = await getAccessToken();
          //set new token to session storage
          const authToken = { accessToken: result.data.accessToken, refreshToken: result.data.newRefreshToken };
          sessionStorage.setItem(TOKEN.AUTH_TOKEN, JSON.stringify(authToken));
          //set new header with new token
          originalRequest.headers['Authorization'] = `Bearer ${result.data.accessToken}`;
          //resend the original request
          axios(originalRequest);
        } catch (error) {
          console.log(error);
        }
        break;
      case error.response.data.status === 403:
        Swal.fire({
          title: 'Error!',
          text: error.response.data.message || API_ERROR.DEFAULT,
          icon: 'error',
          confirmButtonText: 'Got it!',
        });
        break;
      case error.response.data.status === 404:
        Swal.fire({
          title: 'Error!',
          text: error.response.data.message || API_ERROR.DEFAULT,
          icon: 'error',
          confirmButtonText: 'Got it!',
        });
        break;
      case error.response.data.status === 409:
        Swal.fire({
          title: 'Error!',
          text: error.response.data.message || API_ERROR.DEFAULT,
          icon: 'error',
          confirmButtonText: 'Got it!',
        });
        break;
      case error.response.data.status === 500:
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
