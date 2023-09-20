import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import HeaderDefault from '../../Layout/User/HeaderDefault';
import { getCurrentUserAction } from '../../../redux/slice/authenticationSlice';
import { PUBLIC_ROUTE } from '../../../constants';
import getTokenFromStorage from '../../../utils/getTokenFromStorage';
const UserRoute = ({ children }) => {
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

  return (
    <>
      <HeaderDefault />
      {children}
    </>
  );
};

export default UserRoute;
