import API_SERVICE from './api.service';

export const signIn = (data) => {
  return API_SERVICE.post('users/login', data).then((res) => {
    console.log('Login success');
  });
};
