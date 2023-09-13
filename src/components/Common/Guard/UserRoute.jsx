import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HeaderDefault from '../../Layout/User/HeaderDefault';
import { getCurrentUserAction } from '../../../redux/slice/authenticationSlice';
import { PUBLIC_ROUTE, TOKEN } from '../../../constants';
const UserRoute = ({ children }) => {
  const hasTokenInLocal = localStorage.getItem(TOKEN.REFRESH_TOKEN);
  const hasTokenInSession = sessionStorage.getItem(TOKEN.REFRESH_TOKEN);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!hasTokenInLocal && !hasTokenInSession) {
      navigate(PUBLIC_ROUTE.SIGN_IN);
    } else {
      const accessToken = sessionStorage.getItem(TOKEN.ACCESS_TOKEN);
      dispatch(getCurrentUserAction({ accessToken }));
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
