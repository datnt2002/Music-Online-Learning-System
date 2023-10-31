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

export const sendMessage = (data) => {
  console.log(data);
  const body = {
    conversationId: data.conversationId,
    content: data.content,
    messageType: 'text',
  };
  return axiosClient
    .post(`messages/${data.receiverId}`, body, { headers: { Authorization: `Bearer ${data.accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
