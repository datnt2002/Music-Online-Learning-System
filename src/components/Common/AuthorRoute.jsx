import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HeaderDefault from '../Layout/User/HeaderDefault';

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
      {/* <HeaderDefault /> */}
      {children}
    </>
  );
};

export default AuthorRoute;
