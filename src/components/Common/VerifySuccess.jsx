import React from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { PUBLIC_ROUTE } from '../../constants';
import bgNotFound from '../../assets/imgs/404bg.jpg';
import verifySucess from '../../assets/imgs/verifysuccess.webp';

const VerifySuccess = () => {
  return (
    <div
      className="h-screen w-screen flex items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${bgNotFound})`,
      }}
    >
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="max-w-md">
          <div className="text-5xl font-dark font-bold">Verify Successfully</div>
          <p className="text-2xl md:text-3xl font-light leading-normal my-4">You have been register successfully.</p>
          <p className="mb-8">Now, it's time for you to discovery plenty of other things on our homepage.</p>

          <Link to={PUBLIC_ROUTE.SIGN_IN}>
            <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
              <ArrowLeftOutlined className="align-[0.125rem]" /> Back to sign in
            </button>
          </Link>
        </div>
        <div className="max-w-lg">
          <img src={verifySucess} alt="" />
        </div>
      </div>
    </div>
  );
};

export default VerifySuccess;
