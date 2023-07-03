import React from 'react';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

import backgroundImage from '../../assets/imgs/bg-authen.jpg';
import { FORM_FIELDS } from '../../constants';

const ForgotPassword = () => {

    const handleForgotPassword =()=>{}

  return (
    <div
      className="flex justify-end bg-cover w-screen min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="self-center mr-8 w-1/3 bg-white/80 rounded-lg shadow-lg p-6 backdrop-blur-sm text-center ">
        {/* name page */}
        <div>
          <h1 className="text-3xl font-bold">LAUGAU</h1>
          <h4 className="text-sm font-bold mt-4 ">Forget your LAUGAU account</h4>
        </div>
        {/* form */}
        <div className="flex mt-4">
          <Form
            className="login-form flex flex-col w-full relative"
            name="normal_login"
            initialValues={{
              remember: false,
            }}
            onFinish={handleForgotPassword}
          >
            <Form.Item
              name={FORM_FIELDS.USERNAME}
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input
                className="rounded-full p-4 border-2 border-[#F39D39] text-black "
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username*"
              />
            </Form.Item>
            <Form.Item
              name={FORM_FIELDS.EMAIL}
              rules={[
                {
                  required: true,
                  message: 'Please input your Email!',
                },
              ]}
            >
              <Input
                className="rounded-full p-4 border-2 border-[#F39D39] text-black"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button basis-full bg-[#F39D39] rounded-full text-white font-bold text-lg w-full pt-4 pb-4 h-fit"
                style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
              >
                Verify
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div>
          <h4 className="font-bold mt-3 mb-2">Already have an account?</h4>
          {/* day la link router */}
          <Link className="text-[#D07F1F] underline underline-offset-2" to="/signin">
            Sign In
          </Link>
        </div>

        <div>
          <h4 className="font-bold mt-3 mb-2">Don't have an account?</h4>
          {/* day la link router */}
          <Link className="text-[#D07F1F] underline underline-offset-2" to="/signup">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
