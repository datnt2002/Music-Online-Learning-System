import { TOKEN } from '../constants';
import axiosClient from './api.service';

export const signIn = (data) => {
  console.log(data);
  return axiosClient
    .post('users/auth/login', data)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
};

export const signUp = (data) => {
  return axiosClient
    .post('users/auth/register', data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const forgotPassword = (data) => {
  return axiosClient
    .post('users/forgotpassword', data)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((error) => {
      return error;
    });
};

export const changePassword = (data) => {
  const { oldPassword, newPassword } = data;

  return axiosClient
    .put('users/changepassword', { oldPassword, newPassword }, { headers: { Authorization: `Bearer ${data.token}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => err);
};

export const getCurrentUser = (data) => {
  console.log(data);
  return axiosClient
    .get('users/profile/', { headers: { Authorization: `Bearer ${data.accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getAccessToken = () => {
  const refreshToken = sessionStorage.getItem(TOKEN.REFRESH_TOKEN) || localStorage.getItem(TOKEN.REFRESH_TOKEN);
  return axiosClient
    .post('users/auth/refreshtoken', { refreshToken })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
