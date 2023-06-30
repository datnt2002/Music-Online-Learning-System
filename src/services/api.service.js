import axios from 'axios';

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
    return Promise.reject(error);
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
