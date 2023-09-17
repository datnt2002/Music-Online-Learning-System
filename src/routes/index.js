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
import DashBoardAdmin from '../features/Admin/Dashboard';
import Payment from '../features/Home/Payment';
import { TOKEN } from '../constants';
import { useDispatch } from 'react-redux';
import { getCurrentUserAction } from '../redux/slice/authenticationSlice';

const PublicLayout = ({ children }) => {
  const dispatch = useDispatch();
  const authToken =
    JSON.parse(sessionStorage.getItem(TOKEN.AUTH_TOKEN)) || JSON.parse(localStorage.getItem(TOKEN.AUTH_TOKEN));
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
    path: 'payment',
    element: (
      <UserRoute>
        <Payment />
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
    path: 'dashboard',
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
