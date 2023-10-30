import axiosClient from './api.service';

export const getConservation = (data) => {
  console.log(data);
  return axiosClient
    .get(`conversations/${data.receiverId}`, { headers: { Authorization: `Bearer ${data.accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
