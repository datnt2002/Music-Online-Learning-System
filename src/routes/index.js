import React from 'react';

import { AdminRoute, NotFound } from '../components/Common';
import ContentAdmin from '../features/Admin/ContentAdmin';
import Homepage from '../features/Home/Homepage';
import Profile from '../features/Profile/Profile';
import AuthorRoute from '../components/Common/AuthorRoute';

export const publicRoutes = [
  { path: '/', element: <Homepage /> },
  {
    path: '*',
    element: <NotFound />,
  },
];

export const privateRoutes = [
  {
    path: '/profile',
    element: (
      <AuthorRoute>
        <Profile />
      </AuthorRoute>
    ),
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
