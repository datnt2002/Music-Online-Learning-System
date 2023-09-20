import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'antd';
import { Content } from 'antd/es/layout/layout';

import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import TableAdmin from '../../../components/Container/TableAdmin/TableAdmin';
import { LECTURER_ROUTE } from '../../../constants';

const LecturerCourse = () => {
  return (
    <Content className="h-screen p-6">
      <div className="py-3">
        <BreadCrumbCustom />
      </div>
      <Button className="pb-3">
        <Link to={LECTURER_ROUTE.CREATE_NEW_COURSE}>Create New Course</Link>
      </Button>
      <TableAdmin dataSource={[]} />
    </Content>
  );
};

export default LecturerCourse;
