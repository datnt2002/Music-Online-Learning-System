import { Card, Col, Row } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';

const ListContainer = ({ data }) => {
  return (
    <Row
      justify="space-between"
      wrap={false}
      className="overflow-x-auto snap-x scroll-pl-2"
      gutter={{ xs: 8, sm: 16, md: 24, lg: 28 }}
    >
      {data.map((course, index) => {
        return (
          <Col lg={4} md={5}>
            <Card
              hoverable
              cover={
                <div>
                  <img alt="example" src={course.image} className=" aspect-video" />
                </div>
              }
              className="snap-start"
            >
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
          </Col>
        );
      })}
    </Row>
  );
};

export default ListContainer;
