import { Layout } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React from 'react';
import AvatarDropdown from '../User/HeaderComponent/AvatarDropdown';

const HeaderLecturer = () => {
  return (
    <Layout>
      <Header className="flex items-center bg-[#F39D39] h-16">
        {/* Logo */}
        <div className="flex basis-32 text-[#F5F5F5] text-xl ">LauGau</div>
        {/* Searchbox */}

        <div className="flex basis-32">
          <AvatarDropdown />
        </div>

        {/* dark mode */}
        <div className="flex basis-20"></div>
      </Header>
    </Layout>
  );
};

export default HeaderLecturer;
