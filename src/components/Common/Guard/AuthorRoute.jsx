import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Layout from 'antd/es/layout/layout';

import SiderLecturer from '../../Layout/Lecturer/SiderLecturer';
import HeaderLecturer from '../../Layout/Lecturer/HeaderLecturer';
import { PUBLIC_ROUTE } from '../../../constants';
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
    }
  }, [navigate, authToken, dispatch]);
  // const currentUser = useSelector((state) => state.authentication.currentUser);
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
