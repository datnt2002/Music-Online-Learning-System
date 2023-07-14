import React from 'react';
import HeaderDefault from '../../components/Layout/User/HeaderDefault';
import { Button, Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { Footer } from 'antd/es/layout/layout';
import { Categories, Courses } from '../../constants/mockData';
import { RightOutlined } from '@ant-design/icons';

const Homepage = () => {
  return (
    <div>
      <HeaderDefault />
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
          {Categories.map((category, index) => {
            return <p className=" flex-1">{category.title}</p>;
          })}
        </div>
      </div>

      {/* course to get start */}
      <div className="ml-32 mr-32 mt-14">
        <div>
          <h6 className="mb-7">Courses to get you started</h6>
          <Button className="mb-6">Most popular</Button>
          <Button>Trending</Button>
          <div className="flex">
            {Courses.map((course, index) => {
              return (
                <Card hoverable cover={<img alt="example" src={course.image} />}>
                  <Meta
                    title={course.title}
                    description={
                      <>
                        <h4>{course.author}</h4>
                        <h3>{course.rating}</h3>
                        <h1>{course.price}$</h1>
                      </>
                    }
                  />
                </Card>
              );
            })}
          </div>
        </div>

        {/* Feature courses */}
        <div>
          <h3>Feature courses</h3>
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
