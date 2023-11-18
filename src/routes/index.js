import React from 'react';
import { useDispatch } from 'react-redux';

import { getCurrentUserAction } from '../redux/slice/authenticationSlice';
import getTokenFromStorage from '../utils/getTokenFromStorage';

import AdminRoute from '../components/Common/Guard/AdminRoute';
import AuthorRoute from '../components/Common/Guard/AuthorRoute';
import UserRoute from '../components/Common/Guard/UserRoute';
import HeaderDefault from '../components/Layout/User/HeaderDefault';

//public route
import Homepage from '../features/Home/Homepage';
import CourseDetail from '../features/Home/Course/CourseDetail';
import PublicProfile from '../features/Profile/PublicProfile';

//user route
import Profile from '../features/Profile/Profile';
import EditProfile from '../features/Profile/EditProfile';
import Cart from '../features/Home/Cart';
import LessonDetail from '../features/Home/Course/LessonDetail';
import RequestLecturerForm from '../features/Profile/RequestLecturerForm';
import ChoosePaymentMethod from '../features/Home/Payment/ChoosePaymentMethod';
import PurchaseECoin from '../features/Home/Payment/PurchaseECoin';
import Messengers from '../features/Forum/Messengers';

//lecturer route
import DashboardLecturer from '../features/Lecturer/Dashboard/DashboardLecturer';
import LecturerCourse from '../features/Lecturer/CourseManagement/LecturerCourse';
import CreateCourse from '../features/Lecturer/CourseManagement/CreateCourse';
import CreateSection from '../features/Lecturer/CourseManagement/CreateSection';
import CreateLesson from '../features/Lecturer/CourseManagement/CreateLesson';
import EditCourse from '../features/Lecturer/CourseManagement/EditCourse';
import EditSection from '../features/Lecturer/CourseManagement/EditSection';
import EditLesson from '../features/Lecturer/CourseManagement/EditLesson';

//admin route
import DashBoardAdmin from '../features/Admin/Dashboard';
import ManageListCourses from '../features/Admin/Courses/ManageListCourses';
import ManageListAccount from '../features/Admin/Accounts/ManageListAccount';
import CoursesPending from '../features/Admin/Courses/CoursesPending';
import LecturerRequests from '../features/Admin/Accounts/LecturerRequests';
import ManageListCategories from '../features/Admin/Categories/ManageListCategories';
import CreateNewCategory from '../features/Admin/Categories/CreateNewCategory';
import CreateSubCate from '../features/Admin/Categories/CreateSubCate';
import EditSubCate from '../features/Admin/Categories/EditSubCate';
import CoursesDeleting from '../features/Admin/Courses/CoursesDeleting';
import AddSection from '../features/Lecturer/CourseManagement/AddSection';

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
  {
    path: 'profile/:id',
    element: (
      <PublicLayout>
        <PublicProfile />
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
    path: 'lesson-detail/:id',
    element: (
      <UserRoute>
        <LessonDetail />
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
    path: 'lecturer-request-form',
    element: (
      <UserRoute>
        <RequestLecturerForm />
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
  {
    path: 'purchase-eCoin/:bankCode',
    element: (
      <UserRoute>
        <PurchaseECoin />
      </UserRoute>
    ),
  },
  {
    path: 'messengers/:id',
    element: (
      <UserRoute>
        <Messengers />
      </UserRoute>
    ),
  },
  {
    path: 'messengers',
    element: (
      <UserRoute>
        <Messengers />
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
    path: 'create-section/:id',
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
  {
    path: 'edit-course/:id',
    element: (
      <AuthorRoute>
        <EditCourse />
      </AuthorRoute>
    ),
  },
  {
    path: 'edit-section/:id',
    element: (
      <AuthorRoute>
        <EditSection />
      </AuthorRoute>
    ),
  },
  {
    path: 'add-section',
    element: (
      <AuthorRoute>
        <AddSection />
      </AuthorRoute>
    ),
  },
  {
    path: 'edit-lesson/:id',
    element: (
      <AuthorRoute>
        <EditLesson />
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
    path: 'pending-courses',
    element: (
      <AdminRoute>
        <CoursesPending />
      </AdminRoute>
    ),
  },
  {
    path: 'deleted-courses',
    element: (
      <AdminRoute>
        <CoursesDeleting />
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
  {
    path: 'lecturer-requests',
    element: (
      <AdminRoute>
        <LecturerRequests />
      </AdminRoute>
    ),
  },
  {
    path: 'list-categories',
    element: (
      <AdminRoute>
        <ManageListCategories />
      </AdminRoute>
    ),
  },
  {
    path: 'create-category',
    element: (
      <AdminRoute>
        <CreateNewCategory />
      </AdminRoute>
    ),
  },
  {
    path: 'create-sub-category',
    element: (
      <AdminRoute>
        <CreateSubCate />
      </AdminRoute>
    ),
  },
  {
    path: 'edit-sub-category',
    element: (
      <AdminRoute>
        <EditSubCate />
      </AdminRoute>
    ),
  },
];
