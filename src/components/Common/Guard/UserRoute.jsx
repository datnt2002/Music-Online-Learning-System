import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HeaderDefault from '../../Layout/User/HeaderDefault';
import { getCurrentUserAction } from '../../../redux/slice/authenticationSlice';
const UserRoute = ({ children }) => {
  const hasTokenInLocal = localStorage.getItem('token');
  const hasTokenInSession = sessionStorage.getItem('token');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!hasTokenInLocal && !hasTokenInSession) {
      navigate('/signin');
    } else {
      let token = hasTokenInSession || hasTokenInLocal;
      console.log(token);
      dispatch(getCurrentUserAction({ token: token }));
    }
  }, [navigate, hasTokenInLocal, hasTokenInSession, dispatch]);

  const currentUser = useSelector((state) => {
    return state.authentication.currentUser;
  });
  console.log(currentUser);
  return (
    <>
      <HeaderDefault />
      {children}
    </>
  );
};

export default UserRoute;
