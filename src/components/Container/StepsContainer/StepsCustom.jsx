import { Steps } from 'antd';
import React from 'react';
import { VideoCameraAddOutlined, FolderAddOutlined, DesktopOutlined } from '@ant-design/icons';
const StepsCustom = () => {
  const description = 'You can hover on the ';

  return (
    <div className="p-6">
      <Steps
        current={0}
        direction="horizontal"
        items={[
          {
            title: 'Create New Course',
            description,
            icon: <DesktopOutlined />,
          },
          {
            title: 'Create Section',
            description,
            icon: <FolderAddOutlined />,
          },
          {
            title: 'Create Lesson',
            description,
            icon: <VideoCameraAddOutlined />,
          },
        ]}
      />
    </div>
  );
};

export default StepsCustom;
