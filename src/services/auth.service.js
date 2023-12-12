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

export const getCurrentUser = (data) => {
  return axiosClient
    .get('users/profile', { headers: { Authorization: `Bearer ${data.accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const changePassword = (data) => {
  const { oldPassword, newPassword, accessToken } = data;

  return axiosClient
    .put('users/changepassword', { oldPassword, newPassword }, { headers: { Authorization: `Bearer ${accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => err);
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
      return res;
    })
    .catch((error) => {
      return error;
    });
};

export const getAccessToken = () => {
  const { refreshToken } =
    JSON.parse(sessionStorage.getItem(TOKEN.AUTH_TOKEN)) || JSON.parse(localStorage.getItem(TOKEN.AUTH_TOKEN));
  return axiosClient
    .post('users/auth/refreshtoken', { refreshToken })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const uploadAvatar = (data) => {
  const formData = new FormData();
  formData.append('file', data.fileImage);
  return axiosClient
    .patch('users/uploadAvatar', formData, { headers: { Authorization: `Bearer ${data.accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const editProfile = (data) => {
  console.log(data.dobFormat);
  const body = {
    firstName: data?.firstName,
    lastName: data?.lastName,
    phoneNumber: data?.phoneNumber,
    address: data?.address,
    nation: data?.nation,
    gender: data?.gender,
    dob: data?.dobFormat,
    facebook: data?.facebook,
    instagram: data?.instagram,
    bio: data?.bio,
  };
  return axiosClient
    .patch('users', body, { headers: { Authorization: `Bearer ${data.accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const requestLecturer = (data) => {
  const body = {
    introduction: data.introduction,
    roleId: 3,
  };
  return axiosClient
    .post('users/request-change-role', body, { headers: { Authorization: `Bearer ${data.accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getCart = (data) => {
  return axiosClient
    .get('cart', { headers: { Authorization: `Bearer ${data.accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const addToCart = (data) => {
  const body = { courseId: data?.courseId };
  return axiosClient
    .post(`cart/${data?.carId}`, body, { headers: { Authorization: `Bearer ${data.accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const deleteCart = (data) => {
  const body = { courseId: data?.courseId };
  return axiosClient
    .delete(`cart/${data?.carId}`, body, { headers: { Authorization: `Bearer ${data.accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
