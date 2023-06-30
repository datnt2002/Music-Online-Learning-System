import axiosClient from './api.service';

export const signIn = (data) => {
  return axiosClient.post('users/login', data).then((res) => {
    return res.data;
  });
};
