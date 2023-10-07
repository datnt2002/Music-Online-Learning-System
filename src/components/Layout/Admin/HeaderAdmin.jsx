import React from 'react';
import { Link } from 'react-router-dom';

import { Layout } from 'antd';
import { Header } from 'antd/es/layout/layout';

import { ADMIN_ROUTE } from '../../../constants';
import logo from '../../../assets/imgs/fullLogo.png';
import AvatarAdmin from './AvatarAdmin';
import Searchbox from '../../Container/SearchBoxContainer/SearchBox';

const HeaderAdmin = () => {
  return (
    <Layout>
      <Header className="flex justify-between bg-white h-16">
        <div className="flex">
          <div className="flex flex-1">
            <Searchbox />
          </div>
        </div>

        <div className="flex w-28 items-center -ml-4">
          <Link className="text-[#F5F5F5] text-xl" to={ADMIN_ROUTE.DASHBOARD}>
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="flex ml-2 items-center">
          <AvatarAdmin />
        </div>
      </Header>
    </Layout>
  );
};

export default HeaderAdmin;
