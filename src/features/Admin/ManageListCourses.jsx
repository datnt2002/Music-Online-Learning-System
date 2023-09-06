import React from 'react';
import { useSelector } from 'react-redux';

import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import BreadCrumbCustom from '../../components/Container/BreadCrumbContainer/BreadCrumbCustom';

import ExpandedTable from '../../components/Container/TableAdmin/ExpandedTable';

const ManageListCourses = () => {
  const listCourse = useSelector((state) => state.course.listCourse);
  console.log(listCourse);

  return (
    <Layout
      style={{
        padding: '0 24px 24px',
      }}
    >
      <Content
        className="h-screen"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <BreadCrumbCustom />
        <ExpandedTable />
      </Content>
    </Layout>
  );
};

export default ManageListCourses;
