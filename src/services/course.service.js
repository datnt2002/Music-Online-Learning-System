import axiosClient from './api.service';

export const getListCourses = () => {
  return axiosClient
    .get('courses', { params: { pageIndex: 1, pageSize: 1 } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
