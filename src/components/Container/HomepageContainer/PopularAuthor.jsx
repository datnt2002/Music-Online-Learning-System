import React from 'react';
import LecturerCard from '../CardTemplate/LecturerCard';
import { Space } from 'antd';

const PopularAuthor = () => {
  return (
    <Space>
      <LecturerCard />
      <LecturerCard />
      <LecturerCard />
      <LecturerCard />
    </Space>
  );
};

export default PopularAuthor;
