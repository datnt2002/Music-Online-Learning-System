import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import HeaderAdmin from '../Layout/Admin/HeaderAdmin';
import SiderAdmin from '../Layout/Admin/SiderAdmin';
import { Layout } from 'antd';
import { getListCourseAction } from '../../redux/slice/courseSlice';
import { getListAccountAction } from '../../redux/slice/userSlice';

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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getListCourseAction({
        pageSize: 5,
      })
    );
    return () => {};
  }, []);

  useEffect(() => {
    dispatch(
      getListAccountAction({
        pageSize: 4,
        token: hasTokenInLocal ? hasTokenInLocal : hasTokenInSession
      })
    );
    return () => {};
  }, []);

  return (
    <>
      {/* <HeaderAdmin /> */}
      <Layout>
        <SiderAdmin />
        {children}
      </Layout>
    </>
  );
};
