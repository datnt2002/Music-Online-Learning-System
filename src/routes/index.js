import React from 'react';
import { useDispatch } from 'react-redux';

import { getCurrentUserAction } from '../redux/slice/authenticationSlice';
import getTokenFromStorage from '../utils/getTokenFromStorage';

import { AdminRoute } from '../components/Common';
import AuthorRoute from '../components/Common/Guard/AuthorRoute';
import UserRoute from '../components/Common/Guard/UserRoute';
import HeaderDefault from '../components/Layout/User/HeaderDefault';

import Homepage from '../features/Home/Homepage';
import Profile from '../features/Profile/Profile';
import EditProfile from '../features/Profile/EditProfile';
import Cart from '../features/Home/Cart';
import Wishlist from '../features/Home/Wishlist';
import LessonDetail from '../features/Home/Course/LessonDetail';
import CourseDetail from '../features/Home/Course/CourseDetail';
import ManageListAccount from '../features/Admin/ManageListAccount';
import ManageListCourses from '../features/Admin/ManageListCourses';
import DashBoardAdmin from '../features/Admin/Dashboard';
import CreateCourse from '../features/Lecturer/CourseManagement/CreateCourse';
import CreateSection from '../features/Lecturer/CourseManagement/CreateSection';
import CreateLesson from '../features/Lecturer/CourseManagement/CreateLesson';
import DashboardLecturer from '../features/Lecturer/Dashboard/DashboardLecturer';
import LecturerCourse from '../features/Lecturer/CourseManagement/LecturerCourse';
import ChoosePaymentMethod from '../features/Home/Payment/ChoosePaymentMethod';

const PublicLayout = ({ children }) => {
  const dispatch = useDispatch();
  const authToken = getTokenFromStorage();
  if (authToken) {
    dispatch(getCurrentUserAction({ accessToken: authToken.accessToken }));
  }
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
    path: 'course-detail/:id',
    element: (
      <PublicLayout>
        <CourseDetail />
      </PublicLayout>
    ),
  },
];

export const userRoutes = [
  {
    path: 'profile',
    element: (
      <UserRoute>
        <Profile />
      </UserRoute>
    ),
  },
  {
    path: 'profile/edit-profile',
    element: (
      <UserRoute>
        <EditProfile />
      </UserRoute>
    ),
  },
  {
    path: 'my-cart',
    element: (
      <UserRoute>
        <Cart />
      </UserRoute>
    ),
  },
  {
    path: 'my-wishlist',
    element: (
      <UserRoute>
        <Wishlist />
      </UserRoute>
    ),
  },
  {
    path: 'lesson-detail',
    element: (
      <UserRoute>
        <LessonDetail />
      </UserRoute>
    ),
  },
  {
    path: 'payment-method',
    element: (
      <UserRoute>
        <ChoosePaymentMethod />
      </UserRoute>
    ),
  },
];

export const authorRoutes = [
  {
    path: '/',
    element: (
      <AuthorRoute>
        <DashboardLecturer />
      </AuthorRoute>
    ),
  },
  {
    path: 'my-course-management',
    element: (
      <AuthorRoute>
        <LecturerCourse />
      </AuthorRoute>
    ),
  },
  {
    path: 'create-course',
    element: (
      <AuthorRoute>
        <CreateCourse />
      </AuthorRoute>
    ),
  },
  {
    path: 'create-section',
    element: (
      <AuthorRoute>
        <CreateSection />
      </AuthorRoute>
    ),
  },
  {
    path: 'create-lesson',
    element: (
      <AuthorRoute>
        <CreateLesson />
      </AuthorRoute>
    ),
  },
];

export const adminRoutes = [
  {
    path: '/',
    element: (
      <AdminRoute>
        <DashBoardAdmin />
      </AdminRoute>
    ),
  },
  {
    path: 'list-courses',
    element: (
      <AdminRoute>
        <ManageListCourses />
      </AdminRoute>
    ),
  },
  {
    path: 'list-accounts',
    element: (
      <AdminRoute>
        <ManageListAccount />
      </AdminRoute>
    ),
  },
];
