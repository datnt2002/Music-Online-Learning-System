import React from 'react';
import { Button, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';

import ExpandedTable from '../../../components/Container/TableAdmin/ExpandedTable';
import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import { Link } from 'react-router-dom';
const LecturerCourse = () => {
  return (
    <Layout
      style={{
        padding: '0 24px 24px',
      }}
    >
      <Content className="h-screen p-6">
        <div>
          <BreadCrumbCustom />
        </div>
        <Button>
          <Link to="/lecturer/create-course">Create New Course</Link>
        </Button>
        <ExpandedTable />
      </Content>
    </Layout>
  );
};

export default LecturerCourse;
