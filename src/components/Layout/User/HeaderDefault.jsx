import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Header } from 'antd/es/layout/layout';
import { Layout, Space } from 'antd';

import AuthenticationButton from './HeaderComponent/AuthenticationButton';
import CombineAvatarAndCart from './HeaderComponent/CombineAvatarAndCart';
import CategoryDropdown from '../../Container/CategoryContainer/CategoryDropdown';
import Searchbox from '../../Container/SearchBoxContainer/SearchBox';

const HeaderDefault = () => {
  const isAuthenticated = useSelector((state) => state.authentication.isLoggedIn);

  return (
    <Layout>
      <Header className="flex items-center bg-[#F39D39] h-16">
        {/* Logo */}
        <Link className="flex basis-32 text-[#F5F5F5] text-xl" to="/">
          LauGau
        </Link>
        <CategoryDropdown />
        {/* Searchbox */}
        <Searchbox />
        {/* navigation */}
        <Space className="flex basis-36">
          <Link to="">About us</Link>
          <Link to="">About us</Link>
        </Space>

        <div className="flex basis-32">{isAuthenticated ? <CombineAvatarAndCart /> : <AuthenticationButton />}</div>
      </Header>
    </Layout>
  );
};

export default HeaderDefault;
