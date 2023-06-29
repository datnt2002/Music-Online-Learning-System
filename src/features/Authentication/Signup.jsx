import React from 'react';
import backgroundImage from '../../assets/imgs/bg-authen.jpg';
import { Input as InputAntd } from 'antd';
import { Link } from 'react-router-dom';

const Signup = () => {
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
          <form className="flex flex-col flex-1 gap-4 relative">
            <InputAntd className="rounded-full p-4 border-2 border-[#F39D39] text-black " placeholder="Email" />
            <InputAntd className="rounded-full p-4 border-2 border-[#F39D39] text-black " placeholder="Password" />
            <InputAntd
              className="rounded-full p-4 border-2 border-[#F39D39] text-black "
              placeholder="Confirm Password"
            />

            <button
              className="bg-[#F39D39] rounded-full text-white font-bold p-4 text-lg "
              style={{ 'box-shadow': '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
            >
              Sign up
            </button>
          </form>
        </div>

        <div>
          <h4 className="font-bold mt-3 mb-2">Already have an account?</h4>
          {/* day la link router */}
          <Link className="text-[#D07F1F] underline underline-offset-2" to="/signin">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
