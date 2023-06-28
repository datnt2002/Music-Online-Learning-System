import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
export const PrivateRoute = ({ element, ...props }) => {
  //check if user is login
  //If yes, show route
  //Else, go login
  const isLoggedIn = localStorage.getItem('token');

  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate('/signin');
  }

  return <Route {...props} element={element} />;
};
