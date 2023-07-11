import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import HeaderAdmin from '../Layout/Admin/HeaderAdmin';
import SiderAdmin from '../Layout/Admin/SiderAdmin';
import { Layout } from 'antd';

export const AdminRoute = ({ children }) => {
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
      <HeaderAdmin />
      <Layout>
        <SiderAdmin />
        {children}
      </Layout>
    </>
  );
};
