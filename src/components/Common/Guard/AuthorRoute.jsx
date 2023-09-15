import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from 'antd/es/layout/layout';

import SiderLecturer from '../../Layout/Lecturer/SiderLecturer';
import HeaderLecturer from '../../Layout/Lecturer/HeaderLecturer';
import { PUBLIC_ROUTE, ROLE, TOKEN } from '../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUserAction } from '../../../redux/slice/authenticationSlice';
import flattenObj from '../../../utils/flattenObj';

const AuthorRoute = ({ children }) => {
  //check if user is login
  //If yes, show route
  //Else, go login
  const hasTokenInLocal = localStorage.getItem(TOKEN.AUTH_TOKEN);
  const hasTokenInSession = sessionStorage.getItem(TOKEN.AUTH_TOKEN);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!hasTokenInLocal && !hasTokenInSession) {
      navigate(PUBLIC_ROUTE.SIGN_IN);
    } else {
      const authToken = JSON.parse(sessionStorage.getItem(TOKEN.AUTH_TOKEN));
      dispatch(getCurrentUserAction({ accessToken: authToken.accessToken }));
    }
  }, [navigate, hasTokenInLocal, hasTokenInSession, dispatch]);
  const currentUser = useSelector((state) => state.authentication.currentUser);
  // console.log(flattenObj(currentUser));
  // useEffect(() => {
  //   if (currentUser && currentUser.roles[0].Rolename !== ROLE.LECTURER) {
  //     // sau nay navigate to form dki lecturer
  //     navigate(PUBLIC_ROUTE.SIGN_IN);
  //   }
  // }, []);

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
