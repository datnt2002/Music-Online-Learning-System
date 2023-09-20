import React from 'react';

import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { USER_ROUTE } from '../../../constants';

const CourseDetailFloatingPanel = ({ data }) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl fixed top-28 right-28 w-96 ">
      <img
        className="aspect-video rounded-2xl mx-auto -mt-6 shadow-xl w-11/12"
        src={data.courseImg}
        alt="courseImage"
      />

      <div className="flex flex-col p-8">
        <div className="flex flex-col flex-1">
          <h1>1000000VND</h1>
          <Button>Add to Cart</Button>
          <Link to={USER_ROUTE.PAYMENT} className="w-full">
            <Button>Buy Now</Button>
          </Link>
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
