import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, Layout } from 'antd';
import { Header } from 'antd/es/layout/layout';

import AvatarDropdown from '../User/HeaderComponent/AvatarDropdown';
import { LECTURER_ROUTE, PUBLIC_ROUTE } from '../../../constants';
import logo from '../../../assets/imgs/fullLogo.png';

const HeaderLecturer = () => {
  return (
    <Layout>
      <Header className="flex items-center bg-white h-16">
        <div className="flex w-28 items-center mx-auto">
          <Link className="text-[#F5F5F5] text-xl" to={LECTURER_ROUTE.DASHBOARD}>
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="flex">
          <Link className="mr-3" to={PUBLIC_ROUTE.DEFAULT}>
            Home
          </Link>
          <div>
            <AvatarDropdown />
          </div>
        </div>
      </Header>
      <Divider className="bg-black my-0 border-b-2" />
    </Layout>
  );
};

export default HeaderLecturer;
