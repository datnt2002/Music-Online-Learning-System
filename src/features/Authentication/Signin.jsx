import React from 'react';
import backgroundImage from '../../assets/imgs/bg-authen.jpg';
import googleIcon from '../../assets/icons/googleIcon.png';
import facebookIcon from '../../assets/icons/FacebookIcon.png';
import { Input as InputAntd } from 'antd';
import { signIn } from '../../services/auth.service';
import { Link } from 'react-router-dom';

const Signin = () => {
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
          <h4 className="text-sm font-bold mt-4 ">Log in to your LAUGAU account</h4>
        </div>

        {/* form */}
        <div className="flex mt-4">
          <form className="flex flex-col flex-1 gap-4 relative">
            <InputAntd className="rounded-full p-4 border-2 border-[#F39D39] text-black " placeholder="Email" />
            <InputAntd className="rounded-full p-4 border-2 border-[#F39D39] text-black " placeholder="Password" />

            <button
              className="bg-[#F39D39] rounded-full text-white font-bold p-4 text-lg "
              style={{ 'box-shadow': '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
              onClick={(e) => {
                e.preventDefault();
                signIn({
                  username: 'admin',
                  password: '123123',
                });
              }}
            >
              Log in
            </button>
          </form>
        </div>

        <div>
          {/* day la link router */}
          <button className="text-[#D07F1F] mt-4  underline underline-offset-2">Forgot Password?</button>
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
            className=" border-2 border-[#F39D39] p-4 rounded-full
        mt-3 text-base font-medium"
          >
            <img src={googleIcon} alt="googleIcon" className="inline-block mr-2" />
            <span> Continue with Google</span>
          </button>
          <button
            className=" border-2 border-[#F39D39] p-4 rounded-full
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
