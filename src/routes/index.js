import React from 'react';

import { AdminRoute, NotFound } from '../components/Common';
import Signin from '../features/Authentication/Signin';
import Signup from '../features/Authentication/Signup';
import ForgotPassword from '../features/Authentication/ForgotPassword';
import ContentAdmin from '../features/Admin/ContentAdmin';
import Homepage from '../features/Home/Homepage';

export const publicRoutes = [
  { path: '/signin', element: <Signin /> },
  { path: '/signup', element: <Signup /> },
  { path: '/forgotpassword', element: <ForgotPassword /> },
  { path: '/', element: <Homepage /> },
  {
    path: '*',
    element: <NotFound />,
  },
];
export const adminRoutes = [
  {
    path: '/admin',
    element: (
      <AdminRoute>
        <ContentAdmin />
      </AdminRoute>
    ),
  },
];
