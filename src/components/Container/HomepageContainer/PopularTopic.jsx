import React from 'react';
import { Categories } from '../../../constants/mockData';
import { Button } from 'antd';

const PopularTopic = () => {
  return (
    <>
      {Categories.map((category, index) => {
        return (
          <Button className="" key={index}>
            Trending
          </Button>
        );
      })}
    </>
  );
};

export default PopularTopic;
