import React from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { PUBLIC_ROUTE } from '../../constants';
import bgNotFound from '../../assets/imgs/404bg.jpg';
import imgNotFound from '../../assets/imgs/404page.webp';
export const NotFound = () => {
  return (
    <div
      className="h-screen w-screen flex items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${bgNotFound})`,
      }}
    >
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="max-w-md">
          <div className="text-5xl font-dark font-bold">404</div>
          <p className="text-2xl md:text-3xl font-light leading-normal">Sorry we couldn't find this page. </p>
          <p className="mb-8">But don't worry, you can find plenty of other things on our homepage.</p>

          <Link to={PUBLIC_ROUTE.DEFAULT}>
            <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
              <ArrowLeftOutlined className="align-[0.125rem]" /> Back to homepage
            </button>
          </Link>
        </div>
        <div className="max-w-lg">
          <img src={imgNotFound} alt="" />
        </div>
      </div>
    </div>
  );
};
