import React, { useEffect } from 'react';
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

  return (
    <>
      <HeaderLecturer />
      <Layout className="h-screen">
        <SiderLecturer />
        {children}
      </Layout>
    </>
  );
};

export default AuthorRoute;
