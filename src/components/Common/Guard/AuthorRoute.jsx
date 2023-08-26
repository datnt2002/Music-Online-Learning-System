import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Layout from 'antd/es/layout/layout';

import SiderLecturer from '../../Layout/Lecturer/SiderLecturer';
import HeaderLecturer from '../../Layout/Lecturer/HeaderLecturer';

const AuthorRoute = ({ children }) => {
  //check if user is login
  //If yes, show route
  //Else, go login
  const hasTokenInLocal = localStorage.getItem('token');
  const hasTokenInSession = sessionStorage.getItem('token');

  const navigate = useNavigate();
  useEffect(() => {
    if (!hasTokenInLocal && !hasTokenInSession) {
      navigate('/signin');
    }
  }, [navigate, hasTokenInLocal, hasTokenInSession]);

  const currentUser = useSelector((state) => {
    return state.authentication.currentUser;
  });
  console.log(currentUser);
  return (
    <>
      <HeaderLecturer />
      <Layout>
        <SiderLecturer />
        {children}
      </Layout>
    </>
  );
};

export default AuthorRoute;
