import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Layout } from 'antd';

import HeaderAdmin from '../../Layout/Admin/HeaderAdmin';
import SiderAdmin from '../../Layout/Admin/SiderAdmin';
import { getCurrentUserAction } from '../../../redux/slice/authenticationSlice';
import { PUBLIC_ROUTE } from '../../../constants';
import getTokenFromStorage from '../../../utils/getTokenFromStorage';

const AdminRoute = ({ children }) => {
  //check if user is login
  //If yes, show route
  //Else, go login
  const authToken = getTokenFromStorage();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!authToken) {
      navigate(PUBLIC_ROUTE.SIGN_IN);
    } else {
      dispatch(getCurrentUserAction({ accessToken: authToken.accessToken }));
    }
  }, [navigate, authToken, dispatch]);

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

export default AdminRoute;
