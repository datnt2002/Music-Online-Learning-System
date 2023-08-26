import React from 'react';

import { Layout } from 'antd';
import { Header } from 'antd/es/layout/layout';

import AvatarDropdown from '../User/HeaderComponent/AvatarDropdown';

const HeaderAdmin = () => {
  return (
    <Layout>
      <Header className="flex justify-between items-center bg-[#F39D39] h-16">
        {/* Logo */}
        <div className="flex basis-32 text-[#F5F5F5] text-xl ">LauGau</div>

        <div className="flex">
          <div className="flex basis-32">
            <AvatarDropdown />
          </div>
          {/* dark mode */}
          <div className="flex basis-20"></div>
        </div>
      </Header>
    </Layout>
  );
};

export default HeaderAdmin;
