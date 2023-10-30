export const PUBLIC_ROUTE = {
  DEFAULT: '/',
  SIGN_IN: '/signin',
  SIGN_UP: '/signup',
  FORGOT_PASSWORD: '/forgotpassword',
  COURSE_DETAIL: '/course-detail',
  FORUMS: '/forums',
};

export const USER_ROUTE = {
  USER_PROFILE: '/user/profile',
  LESSON_DETAIL: '/user/lesson-detail',
  USER_CART: '/user/my-cart',
  USER_WISHLIST: '/user/my-wishlist',
  USER_EDIT_PROFILE: '/user/profile/edit-profile',
  PAYMENT: '/user/payment-method',
  LECTURER_REQUEST_FORM: '/user/lecturer-request-form',
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
  DELETE_COURSES: '/admin/deleted-courses',
  LIST_ACCOUNTS: '/admin/list-accounts',
  LECTURER_REQUESTS: '/admin/lecturer-requests',
  LIST_CATEGORIES: '/admin/list-categories',
  CREATE_CATEGORY: '/admin/create-category',
  CREATE_SUB_CATEGORY: '/admin/create-sub-category',
  EDIT_SUB_CATEGORY: '/admin/edit-sub-category',
};
