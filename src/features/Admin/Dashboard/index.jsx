import React from 'react';

import { Content } from 'antd/es/layout/layout';
import { Layout } from 'antd';
import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import repeatBg from '../../../assets/imgs/repeatbg.jpg';
import { Pie } from 'react-chartjs-2';
import CategoryTotal from '../../../components/Container/DashboardContainer/Admin/CategoryTotal';
const DashBoardAdmin = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
        hoverOffset: 4,
      },
    ],
  };
  const config = {
    type: 'pie',
    data: data,
  };

  return (
    <Layout style={{ backgroundImage: `url(${repeatBg})`, backgroundSize: '100% auto', padding: '0 24px 24px' }}>
      <div className="my-5 ml-6">
        <BreadCrumbCustom />
      </div>
      <Content
        className="h-screen"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          <CategoryTotal />
          <CategoryTotal />
          <CategoryTotal />
          <CategoryTotal />
        </div>

        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          {/* <ChartOne />
          <ChartTwo />
          <ChartThree />
          <MapOne /> */}
          <div className="col-span-12 xl:col-span-8">{/* <TableOne /> */}</div>
          {/* <ChatCard /> */}
        </div>
      </Content>
    </Layout>
  );
};

export default DashBoardAdmin;
