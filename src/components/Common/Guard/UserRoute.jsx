import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HeaderDefault from '../../Layout/User/HeaderDefault';
import { getCurrentUserAction } from '../../../redux/slice/authenticationSlice';
import { PUBLIC_ROUTE, TOKEN } from '../../../constants';
const UserRoute = ({ children }) => {
  const hasTokenInLocal = localStorage.getItem(TOKEN.AUTH_TOKEN);
  const hasTokenInSession = sessionStorage.getItem(TOKEN.AUTH_TOKEN);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!hasTokenInLocal && !hasTokenInSession) {
      navigate(PUBLIC_ROUTE.SIGN_IN);
    } else {
      //doi jwt co them role thi decode de giam dispactch get curent
      const authToken = JSON.parse(sessionStorage.getItem(TOKEN.AUTH_TOKEN));

      dispatch(getCurrentUserAction({ accessToken: authToken.accessToken }));
    }
  }, [navigate, hasTokenInLocal, hasTokenInSession, dispatch]);

  return (
    <>
      <HeaderDefault />
      {children}
    </>
  );
};

export default UserRoute;
