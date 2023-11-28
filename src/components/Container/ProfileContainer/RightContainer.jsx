import React, { useEffect } from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getListMyBoughtCourseAction } from '../../../redux/slice/courseSlice';
import CourseHorizontalCard from '../CardTemplate/CourseHorizontalCard';

const RightContainer = () => {
  const myListCourse = useSelector((state) => state.course.listMyBoughtCourse);
  const dispatch = useDispatch();
  console.log(myListCourse);
  useEffect(() => {
    dispatch(getListMyBoughtCourseAction({}));
  }, []);
  return (
    <>
      <div className="flex justify-evenly">
        <Button className="bg-black text-white rounded-full px-5 py-2 h-fit">My learning</Button>
        <Button className="bg-black text-white rounded-full px-5 py-2 h-fit">Courses Complete</Button>
      </div>
      <div className="my-10 mx-10">
        {myListCourse.map((course, index) => {
          return (
            <div key={index}>
              <CourseHorizontalCard courseData={course?.Course} />;
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RightContainer;
