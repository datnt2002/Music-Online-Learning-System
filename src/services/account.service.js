import axiosClient from './api.service';

export const getListUser = () => {
  return axiosClient.get('users');
};
