import axiosClient from './api.service';

export const getListCourses = ( pageSize) => {
  console.log(pageSize);
  return axiosClient
    .get('courses', { params: { pageIndex: 1, pageSize: pageSize } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
