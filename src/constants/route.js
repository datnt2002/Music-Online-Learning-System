export const PUBLIC_ROUTE = {
  DEFAULT: '/',
  SIGN_IN: '/signin',
  SIGN_UP: '/signup',
  FORGOT_PASSWORD: '/forgotpassword',
  COURSE_DETAIL: '/course-detail',
};

export const USER_ROUTE = {
  USER_PROFILE: '/user/profile',
  USER_CART: '/user/my-cart',
  USER_WISHLIST: '/user/my-wishlist',
  USER_EDIT_PROFILE: '/user/profile/edit-profile',
  PAYMENT: '/user/payment-method',
};
export const LECTURER_ROUTE = {
  DASHBOARD: '/lecturer',
  MY_COURSE_MANAGEMENT: '/lecturer/my-course-management',
  CREATE_NEW_COURSE: '/lecturer/create-course',
  CREATE_NEW_SECTION: '/lecturer/create-section',
  CREATE_NEW_LESSON: '/lecturer/create-lesson',
};

export const ADMIN_ROUTE = {
  DASHBOARD: '/admin',
  LIST_COURSES: '/admin/list-courses',
  PENDING_COURSES: '/admin/pending-courses',
  DELETE_COURSES: '/admin/delete-courses',
  LIST_ACCOUNTS: '/admin/list-accounts',
  LECTURER_REQUESTS: '/admin/lecturer-requests',
  LIST_CATEGORIES: '/admin/list-categories',
  CREATE_CATEGORY: '/admin/create-category',
};
