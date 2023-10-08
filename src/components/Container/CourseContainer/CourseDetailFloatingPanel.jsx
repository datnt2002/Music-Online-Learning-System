import React from 'react';

import { Button } from 'antd';
import defaultCourse from '../../../assets/imgs/default-course.png';
import { YoutubeOutlined, MobileOutlined, RollbackOutlined } from '@ant-design/icons';

const CourseDetailFloatingPanel = ({ data }) => {
  return (
    <div className="bg-white border-black border rounded-3xl shadow-2xl fixed top-32 right-28 w-96 ">
      <img
        className="aspect-video rounded-2xl mx-auto -mt-6 shadow-xl w-11/12 border border-black"
        src={data.courseImg || defaultCourse}
        alt="courseImage"
      />

      <div className="flex flex-col p-8">
        <div className="flex flex-col flex-1">
          <h1 className="text-2xl font-medium">${data.price}</h1>

          <Button className="border border-black my-1" size="middle">
            Add to Cart
          </Button>
          <Button className="border border-black my-1" size="middle">
            Buy Now
          </Button>
        </div>
        <p className="font-medium text-xl my-2">This course includes:</p>
        <p>
          <YoutubeOutlined className="align-[0.125rem] mr-4" />
          9.5 hours on-demand video
        </p>
        <p>
          <MobileOutlined className="align-[0.125rem] mr-4" />
          Access on mobile and TV
        </p>
        <p>
          <RollbackOutlined className="align-[0.125rem] mr-4" />
          Full lifetime access
        </p>
      </div>
    </div>
  );
};

export default CourseDetailFloatingPanel;
