import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import jwtDecode from 'jwt-decode';

import HeaderAdmin from '../../Layout/Admin/HeaderAdmin';
import SiderAdmin from '../../Layout/Admin/SiderAdmin';
import { getCurrentUserAction } from '../../../redux/slice/authenticationSlice';
import { PUBLIC_ROUTE, ROLE, TOKEN } from '../../../constants';
import getTokenFromStorage from '../../../utils/getTokenFromStorage';

const AdminRoute = ({ children }) => {
  //check if user is login
  //If yes, show route
  //Else, go login
  const authToken = getTokenFromStorage();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    //if no token, it will go to sign in
    if (!authToken) {
      navigate(PUBLIC_ROUTE.SIGN_IN);
      // if has token, get user profile to get role
    } else {
      dispatch(getCurrentUserAction({ accessToken: authToken.accessToken }));
      const decodeToken = jwtDecode(authToken.accessToken);
      if (decodeToken?.roleId[0] !== ROLE.ADMIN) {
        localStorage.removeItem(TOKEN.AUTH_TOKEN);
        sessionStorage.removeItem(TOKEN.AUTH_TOKEN);
        navigate(PUBLIC_ROUTE.SIGN_IN);
      }
    }
  }, []);

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
