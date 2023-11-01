import React from 'react';
import { Content } from 'antd/es/layout/layout';

import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import TableAdmin from '../../../components/Container/TableAdmin/TableAdmin';
import repeatBg from '../../../assets/imgs/repeatbg.jpg';

const LecturerCourse = () => {
  return (
    <Content
      className="h-screen p-6"
      style={{ backgroundImage: `url(${repeatBg})`, backgroundSize: '100% auto', padding: '0 24px 24px' }}
    >
      <div className="py-3">
        <BreadCrumbCustom />
      </div>
      <TableAdmin dataSource={[]} />
    </Content>
  );
};

export default LecturerCourse;
