import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import HeaderDefault from '../../Layout/User/HeaderDefault';
import Footer from '../Footer';
import { getCurrentUserAction } from '../../../redux/slice/authenticationSlice';
import { PAGINATION, PUBLIC_ROUTE } from '../../../constants';
import getTokenFromStorage from '../../../utils/getTokenFromStorage';
import { getListCourseAction } from '../../../redux/slice/courseSlice';

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

  // useEffect(() => {
  //   dispatch(
  //     getListCourseAction({
  //       pageIndex: 1,
  //       pageSize: PAGINATION.PAGE_SIZE,
  //     })
  //   );
  // }, []);

  return (
    <>
      <HeaderDefault />
      {children}
      <Footer />
    </>
  );
};

export default UserRoute;
