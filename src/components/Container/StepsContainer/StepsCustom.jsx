import { Steps } from 'antd';
import React from 'react';
import { VideoCameraAddOutlined, FolderAddOutlined, DesktopOutlined } from '@ant-design/icons';
const StepsCustom = ({ step }) => {
  return (
    <div className="p-6">
      <Steps
        current={step}
        direction="horizontal"
        items={[
          {
            title: 'Create New Course',
            description: 'Intro about course',
            icon: <DesktopOutlined />,
          },
          {
            title: 'Create Section',
            description: 'Add sections',
            icon: <FolderAddOutlined />,
          },
          {
            title: 'Create Lesson',
            description: 'Add video',
            icon: <VideoCameraAddOutlined />,
          },
        ]}
      />
    </div>
  );
};

export default StepsCustom;
