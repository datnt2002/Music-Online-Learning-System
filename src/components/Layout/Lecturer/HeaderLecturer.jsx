import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import { Header } from 'antd/es/layout/layout';

import AvatarDropdown from '../User/HeaderComponent/AvatarDropdown';
import { LECTURER_ROUTE } from '../../../constants';

const HeaderLecturer = () => {
  return (
    <Layout>
      <Header className="flex justify-between items-center bg-[#F39D39] h-16">
        {/* Logo */}
        <div className="flex basis-32 text-[#F5F5F5] text-xl ">
          <Link to={LECTURER_ROUTE.DASHBOARD}>LauGau</Link>
        </div>
        <div className="flex basis-32">
          <AvatarDropdown />
        </div>
      </Header>
    </Layout>
  );
};

export default HeaderLecturer;
