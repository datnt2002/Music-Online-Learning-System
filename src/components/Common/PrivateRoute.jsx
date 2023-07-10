import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export const PrivateRoute = ({ children }) => {
  //check if user is login
  //If yes, show route
  //Else, go login
  const isLoggedIn = localStorage.getItem('token');

  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/signin');
    }
  }, [navigate, isLoggedIn]);

  return <>{children}</>;
};
