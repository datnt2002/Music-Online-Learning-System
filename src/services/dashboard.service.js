import axiosClient from './api.service';

export const getCountCategories = () => {
  return axiosClient
    .get('dashboard/categories')
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
