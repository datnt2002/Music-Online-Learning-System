import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { YoutubeOutlined, MobileOutlined, RollbackOutlined } from '@ant-design/icons';

import defaultCourse from '../../../assets/imgs/default-course.png';
import formatPrice from '../../../utils/formatPrice';
import { buyCourseByECoinAction } from '../../../redux/slice/courseSlice';

const CourseDetailFloatingPanel = () => {
  const currentCourse = useSelector((state) => state.course.currentCourse);
  console.log(currentCourse);
  const dispatch = useDispatch();
  const handleBuyCourse = () => {
    dispatch(
      buyCourseByECoinAction({
        courseIdArray: [{ courseId: currentCourse?.course?.courseId }],
      })
    );
  };
  return (
    <div className="bg-white border-black border w-5/6 rounded-3xl mx-auto mb-6 shadow-2xl lg:fixed top-24 right-2/100  lg:top-32 lg:right-28 lg:w-96">
      <img
        className="aspect-video rounded-2xl mx-auto -mt-6 shadow-xl w-11/12 border border-black"
        src={currentCourse?.course?.courseImg || defaultCourse}
        alt="courseImage"
      />

      <div className="flex flex-col p-4 lg:p-8">
        <div className="flex flex-col flex-1">
          <h1 className="text-lg lg:text-2xl font-medium">
            ${currentCourse?.course?.price && formatPrice(currentCourse?.course?.price)}
          </h1>

          <Button className="border border-black my-1" size="middle">
            Add to Cart
          </Button>
          <Button className="border border-black my-1" size="middle" onClick={handleBuyCourse}>
            Buy Now
          </Button>
        </div>
        <p className="font-medium text-lg lg:text-xl my-2">This course includes:</p>
        <p>
          <YoutubeOutlined className="align-[0.125rem] mr-4" />
          9.5 hours on-demand video
        </p>
        <p>
          <MobileOutlined className="align-[0.125rem] mr-4" />
          Access on mobile and TV
        </p>
        <p>
          <RollbackOutlined className="align-[0.125rem] mr-4" />
          Full lifetime access
        </p>
      </div>
    </div>
  );
};

export default CourseDetailFloatingPanel;
