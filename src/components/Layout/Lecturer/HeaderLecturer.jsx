import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, Layout } from 'antd';
import { Header } from 'antd/es/layout/layout';

import AvatarDropdown from '../User/HeaderComponent/AvatarDropdown';
import { LECTURER_ROUTE } from '../../../constants';
import Searchbox from '../../Container/SearchBoxContainer/SearchBox';
import logo from '../../../assets/imgs/fullLogo.png';

const HeaderLecturer = () => {
  return (
    <Layout>
      <Header className="flex justify-between items-center bg-white h-16">
        <div className="flex">
          <div className="flex flex-1">
            <Searchbox />
          </div>
        </div>

        <div className="flex w-28 items-center -ml-4">
          <Link className="text-[#F5F5F5] text-xl" to={LECTURER_ROUTE.DASHBOARD}>
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="flex ">
          <AvatarDropdown />
        </div>
      </Header>
      <Divider className="bg-black my-0 border-b-2" />
    </Layout>
  );
};

export default HeaderLecturer;
