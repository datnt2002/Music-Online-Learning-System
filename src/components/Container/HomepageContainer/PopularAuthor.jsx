import React, { useRef } from 'react';
import LecturerCard from '../CardTemplate/LecturerCard';
import { Button, Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const PopularAuthor = () => {
  const ref = useRef();
  return (
    <div className="relative">
      <Button
        className="border border-black rounded-full mb-3"
        icon={<LeftOutlined className="align-[0.125rem]" />}
        onClick={() => {
          ref.current.prev();
        }}
      />
      <Carousel ref={ref} rows={1} slidesPerRow={4} dots={false} draggable infinite={true}>
        <div className="flex">
          <LecturerCard />
        </div>
        <div className="flex">
          <LecturerCard />
        </div>
        <div className="flex">
          <LecturerCard />
        </div>
        <div className="flex">
          <LecturerCard />
        </div>
        <div className="flex">
          <LecturerCard />
        </div>{' '}
        <div className="flex">
          <LecturerCard />
        </div>{' '}
        <div className="flex">
          <LecturerCard />
        </div>{' '}
        <div className="flex">
          <LecturerCard />
        </div>{' '}
        <div className="flex">
          <LecturerCard />
        </div>
      </Carousel>

      <Button
        className="absolute right-4 border border-black rounded-full mt-3"
        icon={<RightOutlined className="align-[0.125rem]" />}
        onClick={() => {
          ref.current.next();
        }}
      />
    </div>
  );
};

export default PopularAuthor;
