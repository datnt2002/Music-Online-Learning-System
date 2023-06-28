import React from 'react';

import { AdminLayout } from '../components/Layout';
import { NotFound } from '../components/Common';
import Signin from '../features/Authentication/pages/Signin';
import Signup from '../features/Authentication/pages/Signup';

export const publicRoutes = [
  { path: '/signin', element: <Signin /> },
  { path: '/signup', element: <Signup /> },
  {
    path: '*',
    element: <NotFound />,
  },
];

export const privateRoutes = [
  {
    path: '/admin',
    element: <AdminLayout />,
  },
];
