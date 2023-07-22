import React from 'react';
import { Breadcrumb } from 'antd';

const CourseDetail = () => {
  return (
    <>
      {/* brief course */}
      <div className="bg-black text-white">
        <Breadcrumb
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
        <h1>The Ultimate React Course 2023: React, Redux & More</h1>
        <h2>
          Master modern React from beginner to advanced! Context API, React Query, Redux Toolkit, Tailwind, advanced
          patterns
        </h2>
        <h3>rating</h3>
        <h3>author</h3>
        <h3>Last update</h3>
      </div>
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

      {/* add to cart box */}
    </>
  );
};

export default CourseDetail;
