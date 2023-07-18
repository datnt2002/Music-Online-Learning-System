import { Card, Col, Row } from 'antd';
import Meta from 'antd/es/card/Meta';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ListContainer = ({ data }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div ref={carousel} className="overflow-hidden">
      <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="grid grid-flow-col gap-3">
        {data.map((course, index) => {
          return (
            <motion.div className="">
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
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default ListContainer;
