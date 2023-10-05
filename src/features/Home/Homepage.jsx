import React from 'react';

import { Divider } from 'antd';
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
      <div className="h-16 mt-4 mx-11">
        <SubNavCategory />
      </div>
      <Divider className="mt-0 bg-black" />

      <div className="text-center my-40">
        <h1 className="text-6xl">Lorem ipsum dolor</h1>
        <h1 className="text-6xl">awefwfafaefaewfeawfaeafe</h1>
      </div>

      <Divider className=" bg-black" />

      {/* course to get start */}
      <div className="mx-32 mt-14">
        <div className="my-16">
          <h1 className="text-2xl font-semibold mb-10 text-center">Courses to get you started</h1>
          <ListContainer />
        </div>

        {/* Feature courses */}
        <div className="my-16">
          <h1 className="text-2xl font-semibold mb-10 text-center">Feature courses</h1>
          <ListFeatureCourses />
        </div>
        {/* course to get start */}
        <div className="my-16">
          <h1 className="text-2xl font-semibold mb-10 text-center">Popular Topics</h1>
          <div className="grid grid-cols-5 gap-4">
            <PopularTopic />
          </div>
        </div>

        {/* Popular authors */}
        <div className="my-16">
          <h1 className="text-2xl font-semibold mb-10 text-center">Popular authors</h1>
          <div className="flex">
            <PopularAuthor />
          </div>
        </div>

        <div className="my-16">
          <h1 className="text-2xl font-semibold mb-10 text-center">All Music Courses</h1>
          {/* filter and sort */}
          <AllCourses />
        </div>
      </div>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </div>
  );
};

export default Homepage;
