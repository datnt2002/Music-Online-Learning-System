import React from 'react';
import { Link } from 'react-router-dom';

import { Layout } from 'antd';
import { Header } from 'antd/es/layout/layout';

import { ADMIN_ROUTE } from '../../../constants';
import AvatarAdmin from './AvatarAdmin';

const HeaderAdmin = () => {
  return (
    <Layout>
      <Header className="flex justify-between items-center bg-[#F39D39] h-16">
        {/* Logo */}
        <div className="flex basis-32 text-[#F5F5F5] text-xl">
          <Link to={ADMIN_ROUTE.DASHBOARD}>LauGau</Link>
        </div>

        <div className="flex">
          <div className="flex basis-32">
            <AvatarAdmin />
          </div>
        </div>
      </Header>
    </Layout>
  );
};

export default HeaderAdmin;
