import React from 'react';

import { Layout } from 'antd';
import { Header } from 'antd/es/layout/layout';

const HeaderAdmin = () => {
  return (
    <Layout>
      <Header className="flex items-center bg-[#F39D39] ">
        <div className="demo-logo text-[#F5F5F5]">LauGau</div>
      </Header>
    </Layout>
  );
};

export default HeaderAdmin;
