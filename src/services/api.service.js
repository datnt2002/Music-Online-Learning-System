import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

export const get = async (api, options = {}) => {
  const response = await request.get(api, options);
  return response.data;
};

export const post = async (api, options = {}) => {
  const response = await request.post(api, options);
  return response.data;
};

export const put = async (api, options = {}) => {
  const response = await request.put(api, options);
  return response.data;
};

const API_SERVICE = {
  post,
  get,
  put,
};

export default API_SERVICE;
