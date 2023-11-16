import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Layout from 'antd/es/layout/layout';

import SiderLecturer from '../../Layout/Lecturer/SiderLecturer';
import HeaderLecturer from '../../Layout/Lecturer/HeaderLecturer';
import { PUBLIC_ROUTE, ROLE } from '../../../constants';
import { getCurrentUserAction } from '../../../redux/slice/authenticationSlice';
import getTokenFromStorage from '../../../utils/getTokenFromStorage';

const AuthorRoute = ({ children }) => {
  //check if user is login
  //If yes, show route
  //Else, go login
  const authToken = getTokenFromStorage();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentRole = useSelector((state) => state.authentication.currentUserRole);

  useEffect(() => {
    if (!authToken) {
      navigate(PUBLIC_ROUTE.SIGN_IN);
    } else {
      dispatch(getCurrentUserAction({ accessToken: authToken.accessToken }));
    }
  }, [navigate, dispatch]);

  // useEffect(() => {
  //   const isLecturer = currentRole.some((role) => {
  //     return role.roleId === ROLE.LECTURER;
  //   });
  //   if (!isLecturer) {
  //     navigate(PUBLIC_ROUTE.SIGN_IN);
  //   }
  // }, [currentRole]);

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
