import React from 'react';
import { Layout } from 'antd';
import HeaderAuthen from './HeaderAuthen';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { Header } from 'antd/es/layout/layout';
const HeaderDefault = () => {
  return (
    <Layout>
      <Header className="flex items-center bg-[#F39D39] ">
        {/* Logo */}
        <div className=" text-[#F5F5F5] text-xl ">LauGau</div>
        {/* Searchbox */}
        <div className="max-w-md mx-auto">
          <div className="relative flex items-center w-full h-12 rounded-full focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <SearchOutlined />
            </div>
            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search something.."
            />
          </div>
        </div>

        {/* Navigation */}
        <Link>About Us</Link>
        <Link>About Us</Link>
        <Link>About Us</Link>
        <Link>About Us</Link>
        <Link to="/signin">Sign in</Link>
        <Link to="/signup"> Sign up</Link>
        {/* <HeaderAuthen /> */}
      </Header>
    </Layout>
  );
};

export default HeaderDefault;
