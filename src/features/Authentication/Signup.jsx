import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { LockOutlined, UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

import logo from '../../assets/imgs/fullLogo.png';
import backgroundImage from '../../assets/imgs/bg-authen.jpg';
import { FORM_FIELDS, PLACEHOLDER_FORM, PUBLIC_ROUTE, VALIDATE_MESSAGE } from '../../constants';
import { signupAction } from '../../redux/slice/authenticationSlice';
import Loading from '../../components/Common/Loading';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authentication.loading);

  const handleRegister = (values) => {
    dispatch(
      signupAction({
        username: values.username,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        navigate,
      })
    );
  };
  return (
    <div
      className="flex justify-end bg-cover w-screen min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {loading && <Loading />}
      <div className="self-center mr-8 ml-8 w-full md:w-1/2 lg:w-1/3 bg-white/50 rounded-3xl shadow-lg p-6 backdrop-blur-sm text-center my-6">
        {/* name page */}
        <div>
          <h1 className="text-3xl font-bold">
            <img src={logo} alt="" className="h-16 mx-auto" />
          </h1>
          <h4 className="text-base font-bold mt-4 ">Create your account</h4>
        </div>

        {/* form */}
        <div className="flex mt-4">
          <Form className="flex flex-col flex-1 relative" onFinish={handleRegister} scrollToFirstError>
            <Form.Item
              name={FORM_FIELDS.FIRST_NAME}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: VALIDATE_MESSAGE.FIRST_NAME_REQUIRED,
                },
                {
                  min: 2,
                  message: VALIDATE_MESSAGE.FIRST_NAME_LENGTH,
                },
              ]}
            >
              <Input
                className="rounded-full p-3 border-2 border-black "
                placeholder={PLACEHOLDER_FORM.FIRST_NAME}
                prefix={<UserOutlined />}
              />
            </Form.Item>
            <Form.Item
              name={FORM_FIELDS.LAST_NAME}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: VALIDATE_MESSAGE.LAST_NAME_REQUIRED,
                },
                {
                  min: 2,
                  message: VALIDATE_MESSAGE.LAST_NAME_LENGTH,
                },
              ]}
            >
              <Input
                className="rounded-full p-3 border-2 border-black "
                placeholder={PLACEHOLDER_FORM.LAST_NAME}
                prefix={<UserOutlined className="site-form-item-icon" />}
              />
            </Form.Item>

            <Form.Item
              name={FORM_FIELDS.USERNAME}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: VALIDATE_MESSAGE.USERNAME_REQUIRED,
                },
                {
                  min: 8,
                  message: VALIDATE_MESSAGE.USERNAME_MIN_CHARACTER,
                },
                {
                  max: 15,
                  message: VALIDATE_MESSAGE.USERNAME_MAX_CHARACTER,
                },
              ]}
            >
              <Input
                className="rounded-full p-3 border-2 border-black "
                placeholder={PLACEHOLDER_FORM.USERNAME}
                prefix={<UserOutlined />}
              />
            </Form.Item>

            <Form.Item
              name={FORM_FIELDS.EMAIL}
              hasFeedback
              rules={[
                {
                  type: FORM_FIELDS.EMAIL,
                  message: VALIDATE_MESSAGE.EMAIL_NOT_VALID,
                },
                {
                  required: true,
                  message: VALIDATE_MESSAGE.EMAIL_REQUIRED,
                },
                {
                  min: 10,
                  message: VALIDATE_MESSAGE.EMAIL_LENGTH,
                },
              ]}
            >
              <Input
                className="rounded-full p-3 border-2 border-black "
                placeholder={PLACEHOLDER_FORM.EMAIL}
                prefix={<MailOutlined />}
              />
            </Form.Item>
            <Form.Item
              name={FORM_FIELDS.PHONE_NO}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: VALIDATE_MESSAGE.PHONE_NUMBER_REQUIRED,
                },
                {
                  min: 10,
                  message: VALIDATE_MESSAGE.PHONE_NUMBER_MIN_LENGTH,
                },
                {
                  max: 11,
                  message: VALIDATE_MESSAGE.PHONE_NUMBER_MAX_LENGTH,
                },
                {
                  pattern: new RegExp(/^[0-9]+$/),
                  message: VALIDATE_MESSAGE.PHONE_NUMBER_REGEX,
                },
              ]}
            >
              <Input
                className="rounded-full p-3 border-2 border-black "
                placeholder={PLACEHOLDER_FORM.PHONE_NUMBER}
                prefix={<PhoneOutlined />}
              />
            </Form.Item>
            <Form.Item
              name={FORM_FIELDS.PASSWORD}
              rules={[
                {
                  required: true,
                  message: VALIDATE_MESSAGE.PASSWORD_REQUIRED,
                },
                { min: 6, message: VALIDATE_MESSAGE.PASSWORD_LENGTH },
              ]}
              hasFeedback
            >
              <Input.Password
                className="rounded-full p-3 border-2 border-black "
                placeholder={PLACEHOLDER_FORM.PASSWORD}
                prefix={<LockOutlined />}
              />
            </Form.Item>
            <Form.Item
              name={FORM_FIELDS.CONFIRM_PASSWORD}
              dependencies={[FORM_FIELDS.PASSWORD]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: VALIDATE_MESSAGE.CONFIRM_PASSWORD_REQUIRED,
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue(FORM_FIELDS.PASSWORD) === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error(VALIDATE_MESSAGE.PASSWORD_NOT_MATCH));
                  },
                }),
              ]}
            >
              <Input.Password
                className="rounded-full p-3 border-2 border-black "
                placeholder={PLACEHOLDER_FORM.CONFIRM_PASSWORD}
                prefix={<LockOutlined />}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button basis-full bg-black rounded-full text-white font-bold text-lg w-full pt-2 pb-2 h-fit "
                style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div>
          <h4 className="font-bold mb-1">Already have an account?</h4>
          <Link className="text-[#d33d57] underline underline-offset-2" to={PUBLIC_ROUTE.SIGN_IN}>
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
