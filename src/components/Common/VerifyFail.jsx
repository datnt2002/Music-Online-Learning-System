import React from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { PUBLIC_ROUTE } from '../../constants';
import bgNotFound from '../../assets/imgs/404bg.jpg';
import verifyFail from '../../assets/imgs/verifyfail.png';

const VerifyFail = () => {
  return (
    <div
      className="h-screen w-screen flex items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${bgNotFound})`,
      }}
    >
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="max-w-md">
          <div className="text-5xl font-dark font-bold">Verify Fail</div>
          <p className="text-2xl md:text-3xl font-light leading-normal my-4">Email verification time has passed.</p>
          <p className="mb-8">You must register an account to verify your email.</p>

          <Link to={PUBLIC_ROUTE.SIGN_UP}>
            <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
              <ArrowLeftOutlined className="align-[0.125rem]" /> Back to sign up
            </button>
          </Link>
        </div>
        <div className="max-w-lg">
          <img src={verifyFail} alt="" />
        </div>
      </div>
    </div>
  );
};

export default VerifyFail;
