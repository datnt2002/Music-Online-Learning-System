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
  console.log(data);
  return axiosClient
    .delete(`users/disable/${data.id}`, { headers: { Authorization: `Bearer ${data.token}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
