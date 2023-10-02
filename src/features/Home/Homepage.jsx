import React from 'react';

import { Button, Space } from 'antd';
import { Footer } from 'antd/es/layout/layout';

import ListContainer from '../../components/Container/ListCoursesContainer';
import SubNavCategory from '../../components/Container/SubnavContainer/SubNavCategory';
import ListFeatureCourses from '../../components/Container/ListCoursesContainer/ListFeatureCourses';
import PopularTopic from '../../components/Container/HomepageContainer/PopularTopic';
import PopularAuthor from '../../components/Container/HomepageContainer/PopularAuthor';
import AllCourses from '../../components/Container/HomepageContainer/AllCourses';

const Homepage = () => {
  return (
    <div>
      {/* sub nav */}
      <div
        className="bg-[#F39D39] h-16 rounded-full mt-4 ml-11 mr-11"
        style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
      >
        <SubNavCategory />
      </div>
      {/* course to get start */}
      <div className="mx-32 mt-14">
        <div className="my-16">
          <h1 className="text-4xl font-semibold mb-8">Music Courses</h1>
          <h1 className="text-2xl font-semibold mb-5">Courses to get you started</h1>
          <Space className="mb-8">
            <Button>Most popular</Button>
            <Button>Trending</Button>
          </Space>
          <ListContainer />
        </div>

        {/* Feature courses */}
        <div className="my-16">
          <h1 className="text-2xl font-semibold mb-5">Feature courses</h1>
          <ListFeatureCourses />
        </div>
        {/* course to get start */}
        <div className="my-16">
          <h1 className="text-2xl font-semibold mb-5">Popular Topics</h1>
          <div className="grid grid-cols-5 gap-4">
            <PopularTopic />
          </div>
        </div>

        {/* Popular authors */}
        <div className="my-16">
          <h1 className="text-2xl font-semibold mb-5">Popular authors</h1>
          <div className="flex">
            <PopularAuthor />
          </div>
        </div>

        <div className="my-16">
          <h1 className="text-2xl font-semibold mb-5">All Music Courses</h1>
          {/* filter and sort */}
          <AllCourses />
        </div>
      </div>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </div>
  );
};

export default Homepage;
