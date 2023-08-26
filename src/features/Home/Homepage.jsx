import React from 'react';

import { AppstoreOutlined, SettingOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Space, Carousel, Select, Menu, Pagination } from 'antd';
import { Footer } from 'antd/es/layout/layout';

import { Categories, Courses } from '../../constants/mockData';
import ListContainer from '../../components/Container/ListCoursesContainer';
import SubNavCategory from '../../components/Container/SubnavContainer/SubNavCategory';
import LecturerCard from '../../components/Container/CardTemplate/LecturerCard';
import CourseHorizontalCard from '../../components/Container/CardTemplate/CourseHorizontalCard';

const Homepage = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onClick = (e) => {
    console.log('click ', e);
  };
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('Navigation One', 'sub1', <MailOutlined />, [
      getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
      getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
    ]),
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
    {
      type: 'divider',
    },
    getItem('Navigation Three', 'sub4', <SettingOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),
    getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
  ];
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
              return <CourseHorizontalCard />;
            })}
          </Carousel>
        </div>
        {/* course to get start */}
        <div className="my-16">
          <h1 className="text-2xl font-semibold mb-5">Popular Topics</h1>

          <div className="grid grid-cols-5 gap-4 ">
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

        <div className="my-16">
          <h1 className="text-2xl font-semibold mb-5">All Music Courses</h1>
          <div className="border text-center p-4">
            <p className="font-semibold">Not sure? All courses have a 30-day money-back guarantee</p>
          </div>
          {/* filter and sort */}
          <div className="flex py-4 pr-4 my-4">
            <Select
              defaultValue="lucy"
              size="large"
              onChange={handleChange}
              options={[
                {
                  value: 'jack',
                  label: 'Jack',
                },
                {
                  value: 'lucy',
                  label: 'Lucy',
                },
                {
                  value: 'Yiminghe',
                  label: 'yiminghe',
                },
                {
                  value: 'disabled',
                  label: 'Disabled',
                },
              ]}
            />
            <p className="flex flex-1 justify-end items-center">2000 courses</p>
          </div>

          <div className="flex">
            <div className="flex flex-col basis-1/4">
              <Menu
                onClick={onClick}
                style={{
                  width: 256,
                }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
              />
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <CourseHorizontalCard />
              <CourseHorizontalCard />
              <CourseHorizontalCard />
              <CourseHorizontalCard />
              <CourseHorizontalCard />

              <Pagination defaultCurrent={6} total={500} />
            </div>
          </div>
        </div>
      </div>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </div>
  );
};

export default Homepage;
