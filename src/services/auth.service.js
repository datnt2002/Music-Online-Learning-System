import axiosClient from './api.service';

export const signIn = (data) => {
  return axiosClient
    .post('users/auth/login', data)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
};
