import React from 'react';

import Meta from 'antd/es/card/Meta';
import { Button, Card, Space, Carousel } from 'antd';
import { Footer } from 'antd/es/layout/layout';

import { Categories, Courses } from '../../constants/mockData';
import ListContainer from '../../components/Container/ListCoursesContainer';
import SubNavCategory from '../../components/Container/SubnavContainer/SubNavCategory';
import HorizontalCardTemplate from '../../components/Container/CardTemplate/HorizontalCardTemplate';
import LecturerCard from '../../components/Container/CardTemplate/LecturerCard';

const Homepage = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
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
          <ListContainer data={Courses} />
        </div>

        {/* Feature courses */}
        <div className="my-16">
          <h1 className="text-2xl font-semibold mb-5">Feature courses</h1>
          <Carousel afterChange={onChange}>
            {Courses.map((course, index) => {
              return <HorizontalCardTemplate />;
            })}
          </Carousel>
        </div>
        {/* course to get start */}
        <div className="my-16">
          <h1 className="text-2xl font-semibold mb-5">Popular Topics</h1>

          <div className="grid grid-cols-5 gap-4">
            {Categories.map((category, index) => {
              return <Button className="">Trending</Button>;
            })}
          </div>
        </div>

        {/* Popular authors */}
        <div className="my-16">
          <h1 className="text-2xl font-semibold mb-5">Popular authors</h1>
          <div className="flex">
            <div className="flex basis-1/3">
              <LecturerCard />
            </div>
          </div>
        </div>
      </div>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </div>
  );
};

export default Homepage;
