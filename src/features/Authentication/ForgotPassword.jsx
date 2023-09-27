import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

import backgroundImage from '../../assets/imgs/bg-authen.jpg';
import { FORM_FIELDS, PLACEHOLDER_FORM, PUBLIC_ROUTE, VALIDATE_MESSAGE } from '../../constants';
import { forgotPasswordAction } from '../../redux/slice/authenticationSlice';
import Loading from '../../components/Common/Loading';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector((state) => state.authentication.loading);

  const handleForgotPassword = (values) => {
    dispatch(
      forgotPasswordAction({
        username: values.username,
        email: values.email,
        navigate,
      })
    );
  };

  return (
    <>
      <div
        className="flex justify-end bg-cover w-screen min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {loading && <Loading />}
        <div className="self-center mr-8 ml-8 w-full md:w-1/2 lg:w-1/3 bg-white/80 rounded-lg shadow-lg p-6 backdrop-blur-sm text-center ">
          {/* name page */}
          <div>
            <h1 className="text-3xl font-bold">
              {' '}
              <img
                src="https://musicalminds.com.au/wp-content/uploads/2020/12/Musical_Minds_Logos_FA-01.png"
                className="h-16 mx-auto"
                alt=""
              />
            </h1>
            <h4 className="text-sm font-bold mt-4 ">Forget your LAUGAU account</h4>
          </div>
          {/* form */}
          <div className="flex mt-4">
            <Form className=" flex flex-col w-full relative" onFinish={handleForgotPassword}>
              <Form.Item
                name={FORM_FIELDS.USERNAME}
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
                  className="rounded-full p-3 border-2 border-[#F39D39] text-black"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder={PLACEHOLDER_FORM.USERNAME}
                />
              </Form.Item>
              <Form.Item
                name={FORM_FIELDS.EMAIL}
                rules={[
                  {
                    required: true,
                    message: VALIDATE_MESSAGE.EMAIL_REQUIRED,
                  },
                  {
                    type: FORM_FIELDS.EMAIL,
                    message: VALIDATE_MESSAGE.EMAIL_NOT_VALID,
                  },
                  {
                    min: 10,
                    message: VALIDATE_MESSAGE.EMAIL_LENGTH,
                  },
                ]}
              >
                <Input
                  className="rounded-full p-3 border-2 border-[#F39D39] text-black"
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder={PLACEHOLDER_FORM.EMAIL}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button basis-full bg-[#F39D39] rounded-full text-white font-bold text-lg w-full pt-2 pb-2 h-fit"
                  style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
                >
                  Verify
                </Button>
              </Form.Item>
            </Form>
          </div>

          <div>
            <h4 className="font-bold">Already have an account?</h4>
            <Link className="text-[#D07F1F] underline underline-offset-2" to={PUBLIC_ROUTE.SIGN_IN}>
              Sign In
            </Link>
          </div>

          <div>
            <h4 className="font-bold mt-3">Don't have an account?</h4>
            <Link className="text-[#D07F1F] underline underline-offset-2" to={PUBLIC_ROUTE.SIGN_UP}>
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
