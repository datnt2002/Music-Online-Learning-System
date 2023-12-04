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

export const getCountUsers = () => {
  return axiosClient
    .get('dashboard/users')
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getCountCourses = () => {
  return axiosClient
    .get('dashboard/approvedCourses')
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getProfit = () => {
  return axiosClient
    .get('dashboard/Ecoin')
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getCategoryByNumberOfCourses = () => {
  return axiosClient
    .get('dashboard/getCategoryByNumberOfCourses')
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getUserByMonth = () => {
  return axiosClient
    .get('dashboard/getUserByMonth')
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
