import axiosClient from './api.service';

export const getListUser = (data) => {
  console.log(data);
  return axiosClient
    .get('users', {
      params: { pageIndex: 1, pageSize: data.pageSize },
      headers: { Authorization: `Bearer ${data.token}` },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const disableUser = (data) => {
  return axiosClient
    .delete(`users/disable/${data.id}`, { headers: { Authorization: `Bearer ${data.token}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const uploadAvatar = (data) => {
  console.log(data);
  const formData = new FormData();
  formData.append(data.image);
  return axiosClient
    .patch('users/uploadAvatar', formData, { headers: { Authorization: `Bearer ${data.token}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
