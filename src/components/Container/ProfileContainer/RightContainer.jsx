import React from 'react';
import { Button } from 'antd';

import CourseInfoCard from '../CardTemplate/CourseInfoCard';

const RightContainer = () => {
  return (
    <>
      <div className="flex justify-evenly">
        <Button className="bg-gray-400 rounded-full px-5 py-2 h-fit">My learning</Button>
        <Button className="bg-gray-400 rounded-full px-5 py-2 h-fit">Courses Complete</Button>
      </div>
      <div>
        
      </div>
    </>
  );
};

export default RightContainer;
