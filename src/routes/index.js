import React from 'react';

import { AdminRoute, NotFound } from '../components/Common';
import Homepage from '../features/Home/Homepage';
import Profile from '../features/Profile/Profile';
import AuthorRoute from '../components/Common/AuthorRoute';
import CourseDetail from '../features/Home/CourseDetail';
import ManageListAccount from '../features/Admin/ManageListAccount';
import HeaderDefault from '../components/Layout/User/HeaderDefault';

export const publicRoutes = [
  {
    path: '/',
    element: (
      <>
        <HeaderDefault />
        <Homepage />
      </>
    ),
  },
  { path: '/course-detail', element: <CourseDetail /> },
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
        <ManageListAccount />
      </AdminRoute>
    ),
  },
];
