import React from 'react';

import { Content } from 'antd/es/layout/layout';
import { Layout } from 'antd';
import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import repeatBg from '../../../assets/imgs/repeatbg.jpg';
import CategoryTotal from '../../../components/Container/DashboardContainer/Admin/CategoryTotal';
import PieChart from '../../../components/Container/DashboardContainer/Admin/PieChart';
import MultiLineChart from '../../../components/Container/DashboardContainer/Admin/MultiLineChart';

const DashboardLecturer = () => {
  return (
    <Layout style={{ backgroundImage: `url(${repeatBg})`, backgroundSize: '100% auto', padding: '0 24px 24px' }}>
      <div className="my-5 ml-6">
        <BreadCrumbCustom />
      </div>
      <Content
        className="min-h-screen "
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
          <CategoryTotal />
          <CategoryTotal />
          <CategoryTotal />
          <CategoryTotal />
        </div>

        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 ">
          <PieChart />
          <MultiLineChart />
          <MultiLineChart />
          <PieChart />
        </div>
      </Content>
    </Layout>
  );
};

export default DashboardLecturer;
