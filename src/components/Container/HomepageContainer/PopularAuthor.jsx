import React from 'react';
import LecturerCard from '../CardTemplate/LecturerCard';
import { Carousel } from 'antd';

const PopularAuthor = () => {
  return (
    <Carousel rows={1} slidesPerRow={4} infinite={true}>
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
  );
};

export default PopularAuthor;
