import axiosClient from './api.service';

export const getListUser = (data) => {
  return axiosClient
    .get('users', {
      params: { pageIndex: data.pageIndex, pageSize: data.pageSize },
      headers: { Authorization: `Bearer ${data.accessToken}` },
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
    .delete(`users/disable/${data.id}`, { headers: { Authorization: `Bearer ${data.accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
