import { Button } from 'antd';
import React from 'react';

const RightContainer = () => {
  return (
    <>
      <div className="flex justify-evenly">
        <Button className="bg-gray-400 rounded-full px-5 py-2 h-fit">My learning</Button>
        <Button className="bg-gray-400 rounded-full px-5 py-2 h-fit">Appreciations</Button>
        <Button className="bg-gray-400 rounded-full px-5 py-2 h-fit">Insights</Button>
        <Button className="bg-gray-400 rounded-full px-5 py-2 h-fit">Drafts</Button>
      </div>
      <div></div>
    </>
  );
};

export default RightContainer;
