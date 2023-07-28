import React, { useEffect } from 'react';
import { Button, Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { Footer } from 'antd/es/layout/layout';
import { Categories, Courses } from '../../constants/mockData';
import { RightOutlined } from '@ant-design/icons';
import ListContainer from '../../components/Container/ListCourses';
import { useDispatch } from 'react-redux';
import { getListCourseAction } from '../../redux/slice/courseSlice';

const Homepage = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getListCourseAction());
  //   return () => {};
  // }, []);

  return (
    <div>
      {/* sub nav */}
      <div
        className="bg-[#F39D39] h-16 rounded-full mt-4 ml-11 mr-11"
        style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
      >
        <div className="flex h-full content-center flex-wrap">
          <div>
            <h1>
              Music <RightOutlined />
            </h1>
          </div>
          {Categories.length > 0 ? (
            Categories.map((category, index) => {
              return <p className=" flex-1">{category.title}</p>;
            })
          ) : (
            <div>áa</div>
          )}
        </div>
      </div>

      {/* course to get start */}
      <div className="ml-32 mr-32 mt-14">
        <h6 className="mb-7">Courses to get you started</h6>
        <Button className="mb-6">Most popular</Button>
        <Button>Trending</Button>
        <ListContainer data={Courses} />

        {/* Feature courses */}
        {/* <div> */}
        <h3>Feature courses</h3>
        {/* <div>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </div>
        </div> */}
        <ListContainer data={Courses} />
        {/* course to get start */}
        <div>
          <h3>Courses to get you started</h3>
          <Button>Most popular</Button>
          <Button>Trending</Button>
          <Button>Trending</Button>
          <Button>Trending</Button>
          <Button>Trending</Button>
          <Button>Trending</Button>
          <Button>Trending</Button>
          <Button>Trending</Button>
          <Button>Trending</Button>
          <Button>Trending</Button>
          <Button>Trending</Button>
          <Button>Trending</Button>
        </div>

        {/* Popular authors */}
        <div>
          <h3>Popular authors</h3>
          <div>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </div>
        </div>
      </div>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </div>
  );
};

export default Homepage;
