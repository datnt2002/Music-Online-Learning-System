import React from 'react';
import { Breadcrumb, Rate } from 'antd';
import { ClockCircleOutlined, GlobalOutlined } from '@ant-design/icons';

const CourseDetail = () => {
  return (
    <>
      {/* brief course */}
      <div className="bg-black text-white py-14">
        <div className="mx-auto max-w-7xl">
          <div className="ml-16">
            <Breadcrumb
              className="text-white"
              separator=">"
              items={[
                {
                  title: 'Home',
                },
                {
                  title: 'Application Center',
                  href: '',
                },
                {
                  title: 'Application List',
                  href: '',
                },
                {
                  title: 'An Application',
                },
              ]}
            />
          </div>

          <div className="ml-16 max-w-2xl">
            <h1 className="text-3xl">The Ultimate React Course 2023: React, Redux & More</h1>
            <h2 className="text-xl">
              Master modern React from beginner to advanced! Context API, React Query, Redux Toolkit, Tailwind, advanced
              patterns
            </h2>
            <div className="flex">
              <p className="bg-yellow-300 text-sm text-black py-1 px-2">Best seller</p>
              <p>4.5</p>
              <Rate disabled allowHalf defaultValue={4.5} />
              <p>224 Rating</p>
              <p>448 Subscribes</p>
            </div>
            <p>Created by Author Name</p>
            <div className="flex">
              <ClockCircleOutlined />
              <h3>Last update at 05/2023</h3>
              <GlobalOutlined />
              <h3>Vietnamese</h3>
            </div>
          </div>
        </div>
      </div>

      {/* What you learn */}
      <div className="mx-auto max-w-7xl pt-11">
        <div className='ml-16'>
          <div>Show more pagraph</div>
          {/* course content */}
          <div>
            <h1>Course Content</h1>
            <h4>31 sections • 411 lectures • 67h 10m total length</h4>
            <div>List course dropdown</div>
          </div>

          {/* requirement */}
          <div>
            <h1>Requirements</h1>
            <p>doan nay o trong form dang ki </p>
          </div>

          {/* description */}
          <div>Description</div>

          {/* Best seller */}
          <div></div>

          {/* recommend combo bought */}

          <div></div>

          {/* author */}
          <div></div>

          {/* cmt and rating */}
          <div></div>
        </div>

        {/* add to cart box */}
      </div>
    </>
  );
};

export default CourseDetail;
