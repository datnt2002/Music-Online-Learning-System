import { TOKEN } from '../constants';

const getTokenFromStorage = () => {
  const authToken =
    JSON.parse(sessionStorage.getItem(TOKEN.AUTH_TOKEN)) || JSON.parse(localStorage.getItem(TOKEN.AUTH_TOKEN));
  return authToken;
};

export default getTokenFromStorage;
