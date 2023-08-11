import axiosClient from './api.service';

export const getListCourses = (data) => {
  console.log(data);
  return axiosClient
    .get('courses', { params: { pageIndex: 1, pageSize: data.pageSize } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const createNewCourse = (data) => {
  console.log(data);
  return axiosClient
    .post('courses', data, {headers: { Authorization: `Bearer ${data.token}` }} )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
