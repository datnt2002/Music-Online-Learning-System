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

export const getUserById = (data) => {
  return axiosClient
    .get(`users/${data.userId}`)
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
    .delete(`users/disable/${data.userId}`, { headers: { Authorization: `Bearer ${data.accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getListRoleRequest = (data) => {
  console.log(data);
  return axiosClient
    .get('users/request-change-role', {
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

export const approvedRoleRequest = (data) => {
  console.log(data);
  return axiosClient
    .patch(
      `users/request-change-role/${data.requestId}`,
      {},
      {
        headers: { Authorization: `Bearer ${data.accessToken}` },
      }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
