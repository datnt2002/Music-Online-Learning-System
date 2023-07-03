import React from 'react';

import { AdminLayout } from '../components/Layout';
import { NotFound, PrivateRoute } from '../components/Common';
import Signin from '../features/Authentication/Signin';
import Signup from '../features/Authentication/Signup';
import ForgotPassword from '../features/Authentication/ForgotPassword';

export const publicRoutes = [
  { path: '/signin', element: <Signin /> },
  { path: '/signup', element: <Signup /> },
  { path: '/forgotpassword', element: <ForgotPassword /> },
  {
    path: '*',
    element: <NotFound />,
  },
];

export const privateRoutes = [
  {
    path: '/admin',
    element: (
      <PrivateRoute>
        <AdminLayout />
      </PrivateRoute>
    ),
  },
];
