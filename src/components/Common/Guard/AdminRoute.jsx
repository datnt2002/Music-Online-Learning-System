import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Layout } from 'antd';

import HeaderAdmin from '../../Layout/Admin/HeaderAdmin';
import SiderAdmin from '../../Layout/Admin/SiderAdmin';
import { getCurrentUserAction } from '../../../redux/slice/authenticationSlice';
import { PUBLIC_ROUTE, TOKEN } from '../../../constants';

export const AdminRoute = ({ children }) => {
  //check if user is login
  //If yes, show route
  //Else, go login
  const hasTokenInLocal = localStorage.getItem(TOKEN.AUTH_TOKEN);
  const hasTokenInSession = sessionStorage.getItem(TOKEN.AUTH_TOKEN);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!hasTokenInLocal && !hasTokenInSession) {
      navigate(PUBLIC_ROUTE.SIGN_IN);
    } else {
      let authToken = JSON.parse(hasTokenInSession) || JSON.parse(hasTokenInLocal);
      dispatch(getCurrentUserAction({ accessToken: authToken.accessToken }));
    }
  }, [navigate, hasTokenInLocal, hasTokenInSession, dispatch]);

  return (
    <>
      <HeaderAdmin />
      <Layout className="min-h-screen">
        <SiderAdmin />
        {children}
      </Layout>
    </>
  );
};
