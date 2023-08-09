import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

import backgroundImage from '../../assets/imgs/bg-authen.jpg';
import googleIcon from '../../assets/icons/googleIcon.png';
import facebookIcon from '../../assets/icons/FacebookIcon.png';
import { signInAction } from '../../redux/slice/authenticationSlice';
import { FORM_FIELDS } from '../../constants';

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (values) => {
    dispatch(
      signInAction({
        username: values.username,
        password: values.password,
        remember: values.remember,
        navigate: navigate,
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
      <div className="self-center mr-8 ml-8 w-full md:w-1/2 lg:w-1/3 bg-white/80 rounded-lg shadow-lg p-6 backdrop-blur-sm text-center ">
        {/* name page */}
        <div>
          <h1 className="text-3xl font-bold">LAUGAU</h1>
          <h4 className="text-sm font-bold mt-4">Log in to your LAUGAU account</h4>
        </div>
        {/* form */}
        <div className="flex mt-4">
          <Form
            className="login-form flex flex-col w-full relative"
            name="normal_login"
            initialValues={{
              remember: false,
            }}
            onFinish={handleLogin}
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
                className="rounded-full p-3 border-2 border-[#F39D39] text-black"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username*"
              />
            </Form.Item>
            <Form.Item
              name={FORM_FIELDS.PASSWORD}
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input.Password
                className="rounded-full p-3 border-2 border-[#F39D39] text-black"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className="-mt-2 mb-3">Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button basis-full bg-[#F39D39] rounded-full text-white font-bold text-lg w-full pt-2 pb-2 h-fit"
                style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div>
          <Link className="text-[#D07F1F] underline underline-offset-2" to="/forgotpassword">
            Forgot Password?
          </Link>
        </div>

        <div>
          <h4 className="font-bold mt-3 mb-2">Don't have an account?</h4>
          {/* day la link router */}
          <Link className="text-[#D07F1F] underline underline-offset-2" to="/signup">
            Sign up
          </Link>
        </div>

        <div className="flex flex-col flex-1">
          <button
            className=" border-2 border-[#F39D39] p-1 rounded-full
        mt-3 text-base font-medium"
          >
            <img src={googleIcon} alt="googleIcon" className="inline-block mr-2" />
            <span> Continue with Google</span>
          </button>
          <button
            className=" border-2 border-[#F39D39] p-1 rounded-full
        mt-3 text-base font-medium"
          >
            <img src={facebookIcon} alt="facebookIcon" className="inline-block" />
            <span> Continue with Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
