import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import React, { useEffect, useRef, useState } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { Link } from 'react-router-dom';

const ListContainer = ({ data }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <m.div ref={carousel} className="overflow-hidden">
        <m.div drag="x" dragConstraints={{ right: 0, left: -width }} className="grid grid-flow-col gap-4">
          {data.map((course, index) => {
            return (
              <m.div key={index} className="">
                <Link to="/course-detail">
                  <Card
                    hoverable
                    cover={
                      <div>
                        <img alt="example" src={course.image} className="aspect-video col-span-3" />
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
                </Link>
              </m.div>
            );
          })}
        </m.div>
      </m.div>
    </LazyMotion>
  );
};

export default ListContainer;
