import React from 'react';

import { Button } from 'antd';

const CourseDetailFloatingPanel = () => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl fixed top-28 right-28 w-96">
      <img
        className="aspect-video "
        src="https://www-cdn.eumetsat.int/files/styles/16_9_large/s3/2022-03/ocean_0.jpg?h=2f83cd36&itok=KIa1F6id"
        alt="courseImage"
      />

      <div className="flex flex-col p-8">
        <div className="flex flex-col flex-1">
          <h1>1000000VND</h1>
          <Button>Add to Cart</Button>
          <Button>Buy Now</Button>
        </div>
        <p>This course includes</p>
        <p>This course includes</p>
        <p>This course includes</p>
        <p>This course includes</p>
        <p>This course includes</p>
        <p>This course includes</p>
        <p>This course includes</p>
      </div>
    </div>
  );
};

export default CourseDetailFloatingPanel;
