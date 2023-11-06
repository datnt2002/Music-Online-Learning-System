import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Header } from 'antd/es/layout/layout';
import { Layout } from 'antd';

import AuthenticationButton from './HeaderComponent/AuthenticationButton';
import CombineAvatarAndCart from './HeaderComponent/CombineAvatarAndCart';
import CategoryDropdown from '../../Container/CategoryContainer/CategoryDropdown';
import Searchbox from '../../Container/SearchBoxContainer/SearchBox';
import { PUBLIC_ROUTE } from '../../../constants';
import logo from '../../../assets/imgs/fullLogo.png';

const HeaderDefault = () => {
  const isAuthenticated = useSelector((state) => state.authentication.isLoggedIn);

  return (
    <Layout>
      <Header className="flex justify-between bg-white h-16 ">
        <div className="flex w-full items-center lg:w-auto">
          <Searchbox />
          <CategoryDropdown />
        </div>

        <div className="flex w-28 items-center -ml-4">
          <Link className="" to={PUBLIC_ROUTE.DEFAULT}>
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="flex">
          <Link className="mr-4" to={PUBLIC_ROUTE.FORUMS}>
            Forums
          </Link>

          <div className="flex ml-2">{isAuthenticated ? <CombineAvatarAndCart /> : <AuthenticationButton />}</div>
        </div>
      </Header>
    </Layout>
  );
};

export default HeaderDefault;
