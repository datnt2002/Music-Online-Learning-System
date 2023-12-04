import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Layout from 'antd/es/layout/layout';
import jwtDecode from 'jwt-decode';

import SiderLecturer from '../../Layout/Lecturer/SiderLecturer';
import HeaderLecturer from '../../Layout/Lecturer/HeaderLecturer';
import { PUBLIC_ROUTE, TOKEN } from '../../../constants';
import { getCurrentUserAction } from '../../../redux/slice/authenticationSlice';
import getTokenFromStorage from '../../../utils/getTokenFromStorage';

const AuthorRoute = ({ children }) => {
  //check if user is login
  //If yes, show route
  //Else, go login
  const authToken = getTokenFromStorage();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authToken) {
      navigate(PUBLIC_ROUTE.SIGN_IN);
    } else {
      dispatch(getCurrentUserAction({ accessToken: authToken.accessToken }));
      const decodeToken = jwtDecode(authToken.accessToken);
      console.log(decodeToken);
      if (decodeToken?.roleId.length < 2) {
        localStorage.removeItem(TOKEN.AUTH_TOKEN);
        sessionStorage.removeItem(TOKEN.AUTH_TOKEN);
        navigate(PUBLIC_ROUTE.SIGN_IN);
      }
    }
  }, []);

  return (
    <>
      <HeaderLecturer />
      <Layout className="min-h-screen">
        <SiderLecturer />
        {children}
      </Layout>
    </>
  );
};

export default AuthorRoute;
