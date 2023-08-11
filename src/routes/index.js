import React from 'react';

import { AdminRoute, NotFound } from '../components/Common';
import Homepage from '../features/Home/Homepage';
import Profile from '../features/Profile/Profile';
import AuthorRoute from '../components/Common/AuthorRoute';
import CourseDetail from '../features/Home/CourseDetail';
import ManageListAccount from '../features/Admin/ManageListAccount';
import HeaderDefault from '../components/Layout/User/HeaderDefault';
import ManageListCourses from '../features/Admin/ManageListCourses';
import CreateCourse from '../features/Lecturer/CreateCourse';
import EditProfile from '../features/Profile/EditProfile';

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

export const authorRoutes = [
  {
    path: '/profile',
    element: (
      <AuthorRoute>
        <Profile />
      </AuthorRoute>
    ),
  },
  {
    path: '/create-course',
    element: (
      <AuthorRoute>
        <CreateCourse />
      </AuthorRoute>
    ),
  },
  {
    path: '/edit-profile',
    element: (
      <AuthorRoute>
        <EditProfile />
      </AuthorRoute>
    ),
  },
];

export const adminRoutes = [
  {
    path: '/admin/list-accounts',
    element: (
      <AdminRoute>
        <ManageListAccount />
      </AdminRoute>
    ),
  },
  {
    path: '/admin/list-courses',
    element: (
      <AdminRoute>
        <ManageListCourses />
      </AdminRoute>
    ),
  },
];
