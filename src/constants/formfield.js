export const FORM_FIELDS = {
  USERNAME: 'username',
  PASSWORD: 'password',
  EMAIL: 'email',
  CONFIRM_PASSWORD: 'confirm_password',
  FIRST_NAME: 'firstName',
  LAST_NAME: 'lastName',
  PHONE_NO: 'phoneNumber',
  SEARCH: 'search',
};

export const PROFILE_FORM_FIELDS = {
  FIRST_NAME: 'firstName',
  FIRST_NAME_LABEL: 'First Name',
  LAST_NAME: 'lastName',
  LAST_NAME_LABEL: 'Last Name',
  PASSWORD: 'password',
  PASSWORD_LABEL: 'Password',
  EMAIL: 'email',
  EMAIL_LABEL: 'Email',
  PHONE_NUMBER: 'phoneNumber',
  PHONE_NUMBER_LABEL: 'Phone No',
  ADDRESS: 'address',
  ADDRESS_LABEL: 'Address',
  NATION: 'nation',
  NATION_LABEL: 'Nation',
  GENDER: 'gender',
  GENDER_LABEL: 'Gender',
  GENDER_MALE: 'Male',
  GENDER_MALE_VALUE: 'male',
  GENDER_FEMALE: 'Female',
  GENDER_FEMALE_VALUE: 'female',
  DOB: 'dob',
  DOB_LABEL: 'Date Of Birth',
  FACEBOOK: 'facebook',
  FACEBOOK_LABEL: 'Facebook',
  INSTAGRAM: 'instagram',
  INSTAGRAM_LABEL: 'Instagram',
  BIO: 'bio',
  BIO_LABEL: 'Bio',
};

export const CHANGE_PASSWORD_FORM_FIELDS = {
  FORM_ID: 'myFormChangePassword',
  FORM_TITLE: 'Change Password',
  NEW_PASSWORD: 'newPassword',
  NEW_PASSWORD_LABEL: 'New Password',
  OLD_PASSWORD: 'oldPassword',
  OLD_PASSWORD_LABEL: 'Old Password',
  CONFIRM_PASSWORD: 'confirmPassword',
  CONFIRM_PASSWORD_LABEL: 'Confirm Password',
};

export const LECTURER_REQUEST_FORM_FIELDS = {
  INTRODUCTION: 'introduction',
  INTRODUCTION_LABEL: 'Introduction',
};

export const CREATE_COURSE_FORM_FIELDS = {
  COURSE_NAME: 'courseName',
  COURSE_NAME_LABEL: 'Course Name',
  CATEGORY: 'category',
  CATEGORY_LABEL: 'Category',
  SUB_CATEGORY: 'subcategory',
  SUB_CATEGORY_LABEL: 'Sub Category',
  BRIEF_DESCRIPTION: 'brief_description',
  BRIEF_DESCRIPTION_LABEL: 'Brief Description',
  PRICE: 'price',
  PRICE_LABEL: 'Price',
  DESCRIPTION: 'description',
  DESCRIPTION_LABEL: 'Description',
  WHAT_WILL_LEARN: 'knowledge',
  WHAT_WILL_LEARN_LABEL: 'What Will Learn',
  REQUIREMENT: 'requirement',
  COURSE_IMAGE_LABEL: 'Course Image',
};

export const CREATE_SECTION_FORM_FIELDS = {
  SECTION_NAME: 'sectionName',
  TITLE: 'Section',
  SECTION_PLACEHOLDER: 'Enter section',
};

export const CREATE_CATEGORY_FORM_FIELDS = {
  CATEGORY_NAME: 'cateName',
  TITLE: 'Category Name',
  CATEGORY_PLACEHOLDER: 'Enter category',
};

export const EDIT_CATEGORY_FORM_FIELDS = {
  CATEGORY_NAME: 'cateName',
  CATEGORY_NAME_LABEL: 'Category Name',
  CATE_ID: 'cateId',
  CATE_ID_LABEL: 'Category Id',
};

export const SUB_CATEGORY_FORM_FIELDS = {
  NEW_SUB_CATEGORY_NAME: 'subCateName',
  SUB_CATEGORY_ID: 'subCateId',
  SUB_CATEGORY_NAME_LABEL: 'Sub Category Name',
  NEW_SUB_CATEGORY_NAME_LABEL: 'New Sub Category Name',
  CATEGORY_NAME_LABEL: 'Category',
  CATEGORY_ID: 'cateId',
  SELECT_CATE_PLACEHOLDER: 'Select a category',
  SELECT_SUB_CATE_PLACEHOLDER: 'Select a sub category',
};

export const CREATE_LESSON_FORM_FIELDS = {
  LESSON_NAME: 'lessonName',
  LESSON_NAME_LABEL: 'Lesson Name',
  LESSON_DESCRIPTION: 'lessonDescription',
  LESSON_DESCRIPTION_LABEL: 'Description',
  LESSON_VIDEO: 'file',
  LESSON_VIDEO_LABEL: 'Video',
  SECTION_ID: 'sectionId',
  SECTION_LABEL: 'Section Name',
  QUIZ_TITLE_NAME: 'title',
  QUIZ_TITLE_LABEL: 'Title',
  QUESTION_CONTENT_NAME: 'content',
  QUESTION_LABEL: 'Question',
  ANSWER_CONTENT_NAME: 'content',
  ANSWER_ARRAY_NAME: 'answer',
  ANSWER_LABEL: 'Answer',
  CHECKBOX_CORRECT: 'isCorrect',
};

export const VALIDATE_MESSAGE = {
  FIRST_NAME_REQUIRED: 'Please input your first name',
  FIRST_NAME_LENGTH: 'First name must be at least 2 characters',
  LAST_NAME_REQUIRED: 'Please input your last name',
  LAST_NAME_LENGTH: 'Last name must be at least 2 characters',
  USERNAME_REQUIRED: 'Please input your Username!',
  USERNAME_MIN_CHARACTER: 'Username must be at least 8 characters!',
  USERNAME_MAX_CHARACTER: 'Username must have maximum 15 characters!',
  USERNAME_NOT_CONTAIN_SPECIAL: 'Username must not have special characters',
  EMAIL_REQUIRED: 'Please input your Email!',
  EMAIL_NOT_VALID: 'The input is not valid E-mail!',
  EMAIL_LENGTH: 'Email must have at least 10 characters!',
  PHONE_NUMBER_REQUIRED: 'Please input your Phone Number!',
  PHONE_NUMBER_MIN_LENGTH: 'Phone Number must have at least 10 characters!',
  PHONE_NUMBER_MAX_LENGTH: 'Phone number must have maximum 11 characters!',
  PHONE_NUMBER_REGEX: 'Phone number must have number characters!',
  PASSWORD_REQUIRED: 'Please input your Password!',
  PASSWORD_LENGTH: 'Password must be at least 6 characters!',
  CONFIRM_PASSWORD_REQUIRED: 'Please confirm your password!',
  PASSWORD_NOT_MATCH: 'The new password that you entered do not match!',
  NEW_PASSWORD_DIFFERENT: 'The new password need to different than old password!',
  CATEGORY_REQUIRED: 'Category name is required',
  SUB_CATEGORY_REQUIRED: 'Sub category name is required',

  COURSE_NAME_REQUIRED: 'Please input Course Name!',
  BRIEF_DESCRIPTION_REQUIRED: 'Please input brief description!',
  PRICE_REQUIRED: 'Please input price',
  DESCRIPTION_REQUIRED: 'Please input description!',
  SECTION_REQUIRED: 'Please choose section',
  LESSON_REQUIRED: 'Please enter lesson name',
  LESSON_DESCRIPTION_REQUIRED: 'Please enter lesson description',
  REQUIRED: 'Please input this field.',
  INTRODUCTION_MIN: 'Introduction must be at least 50 characters long',
};

export const PLACEHOLDER_FORM = {
  USERNAME: 'Username',
  EMAIL: 'Email',
  PASSWORD: 'Password',
  FIRST_NAME: 'First Name',
  LAST_NAME: 'Last Name',
  CONFIRM_PASSWORD: 'Confirm Password',
  PHONE_NUMBER: 'Phone Number',
};
