import axiosClient from './api.service';

export const getListUser = () => {
  return axiosClient
    .get('users', { params: { pageIndex: 1, pageSize: 1 } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
