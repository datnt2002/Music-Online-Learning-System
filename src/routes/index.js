import React from 'react';

import { AdminRoute, NotFound } from '../components/Common';
import Homepage from '../features/Home/Homepage';
import Profile from '../features/Profile/Profile';

import CourseDetail from '../features/Home/CourseDetail';
import ManageListAccount from '../features/Admin/ManageListAccount';
import ManageListCourses from '../features/Admin/ManageListCourses';
import CreateCourse from '../features/Lecturer/CourseManagement/CreateCourse';
import EditProfile from '../features/Profile/EditProfile';
import CreateSection from '../features/Lecturer/CourseManagement/CreateSection';
import CreateLesson from '../features/Lecturer/CourseManagement/CreateLesson';
import AuthorRoute from '../components/Common/Guard/AuthorRoute';
import UserRoute from '../components/Common/Guard/UserRoute';
import HeaderDefault from '../components/Layout/User/HeaderDefault';
import Cart from '../features/Home/Cart';
import Wishlist from '../features/Home/Wishlist';
import DashboardLecturer from '../features/Lecturer/Dashboard/DashboardLecturer';
import LecturerCourse from '../features/Lecturer/CourseManagement/LecturerCourse';

const PublicLayout = ({ children }) => {
  return (
    <>
      <HeaderDefault />
      {children}
    </>
  );
};

export const publicRoutes = [
  {
    path: '/',
    element: (
      <PublicLayout>
        <Homepage />
      </PublicLayout>
    ),
  },
  {
    path: '/course-detail',
    element: (
      <PublicLayout>
        <CourseDetail />
      </PublicLayout>
    ),
  },
  {
    path: '*',
    element: (
      <PublicLayout>
        <NotFound />
      </PublicLayout>
    ),
  },
];

export const userRoutes = [
  {
    path: '/user/profile',
    element: (
      <UserRoute>
        <Profile />
      </UserRoute>
    ),
  },
  {
    path: '/user/profile/edit-profile',
    element: (
      <UserRoute>
        <EditProfile />
      </UserRoute>
    ),
  },
  {
    path: '/user/my-cart',
    element: (
      <UserRoute>
        <Cart />
      </UserRoute>
    ),
  },
  {
    path: '/user/my-wishlist',
    element: (
      <UserRoute>
        <Wishlist />
      </UserRoute>
    ),
  },
];

export const authorRoutes = [
  {
    path: '/lecturer',
    element: (
      <AuthorRoute>
        <DashboardLecturer />
      </AuthorRoute>
    ),
  },
  {
    path: '/lecturer/my-course-management',
    element: (
      <AuthorRoute>
        <LecturerCourse />
      </AuthorRoute>
    ),
  },
  {
    path: '/lecturer/create-course',
    element: (
      <AuthorRoute>
        <CreateCourse />
      </AuthorRoute>
    ),
  },
  {
    path: '/lecturer/create-section',
    element: (
      <AuthorRoute>
        <CreateSection />
      </AuthorRoute>
    ),
  },
];

export const adminRoutes = [];
