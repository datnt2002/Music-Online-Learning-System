import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Input, Checkbox, Button } from 'antd';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';

import backgroundImage from '../../assets/imgs/bg-authen.jpg';
import { FORM_FIELDS } from '../../constants';
import { signupAction } from '../../redux/slice/authenticationSlice';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = (values) => {
    dispatch(
      signupAction({
        username: values.username,
        password: values.password,
        email: values.email,
        navigate,
      })
    );
    console.log('Received values of form: ', values);
  };
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
          <h4 className="text-sm font-bold mt-4 ">Create your LAUGAU account</h4>
        </div>

        {/* form */}
        <div className="flex mt-4">
          <Form className="flex flex-col flex-1 relative" name="register" onFinish={handleRegister} scrollToFirstError>
            <Form.Item
              name={FORM_FIELDS.USERNAME}
              rules={[
                {
                  required: true,
                  message: 'Please input your username',
                },
              ]}
            >
              <Input
                className="rounded-full p-3 border-2 border-[#F39D39] "
                placeholder="Username*"
                prefix={<UserOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
            <Form.Item
              name={FORM_FIELDS.EMAIL}
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input
                className="rounded-full p-3 border-2 border-[#F39D39] "
                placeholder="Email*"
                prefix={<MailOutlined className="site-form-item-icon" />}
              />
            </Form.Item>

            <Form.Item
              name={FORM_FIELDS.PASSWORD}
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback
            >
              <Input.Password
                className="rounded-full p-3 border-2 border-[#F39D39] "
                placeholder="Password*"
                prefix={<LockOutlined className="site-form-item-icon" />}
              />
            </Form.Item>

            <Form.Item
              name={FORM_FIELDS.CONFIRM_PASSWORD}
              dependencies={[FORM_FIELDS.PASSWORD]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue(FORM_FIELDS.PASSWORD) === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The new password that you entered do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password
                className="rounded-full p-3 border-2 border-[#F39D39] "
                placeholder="Confirm Password*"
                prefix={<LockOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                },
              ]}
            >
              <Checkbox>
                I have read the
                <Link href="" className="font-bold">
                  {' '}
                  Terms And Policy
                </Link>
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button basis-full bg-[#F39D39] rounded-full text-white font-bold text-lg w-full pt-2 pb-2 h-fit "
                style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div>
          <h4 className="font-bold mb-1">Already have an account?</h4>
          <Link className="text-[#D07F1F] underline underline-offset-2" to="/signin">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
