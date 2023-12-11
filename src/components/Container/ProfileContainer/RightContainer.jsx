import React, { useEffect } from 'react';
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
      <div className="my-10 mx-10">
        {myListCourse.map((course, index) => {
          return (
            <div key={index}>
              <CourseHorizontalCard courseData={course?.Course} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RightContainer;
