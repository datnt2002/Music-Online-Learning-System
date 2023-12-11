import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'antd';
import { getListMyBoughtCourseAction } from '../../../redux/slice/courseSlice';
import CourseHorizontalCard from '../CardTemplate/CourseHorizontalCard';
import { PAGINATION } from '../../../constants';

const RightContainer = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const myListCourse = useSelector((state) => state.course.listMyBoughtCourse);
  const pagination = useSelector((state) => state.course.pagination);
  const dispatch = useDispatch();

  const courseIdMap = {};
  const filterCourse = myListCourse.filter((course) => {
    const courseId = course?.Course?.courseId;
    if (!courseIdMap[courseId]) {
      courseIdMap[courseId] = true;
      return true;
    }
    return false;
  });

  useEffect(() => {
    dispatch(
      getListMyBoughtCourseAction({
        pageIndex: pageIndex,
        pageSize: PAGINATION.PAGE_SIZE,
      })
    );
  }, []);

  return (
    <>
      <div className="my-10 mx-10">
        {filterCourse.map((course, index) => {
          return (
            <div key={index}>
              <CourseHorizontalCard courseData={course?.Course} />
            </div>
          );
        })}
        <div className="text-center">
          <Pagination
            defaultCurrent={1}
            current={pageIndex}
            pageSize={5}
            total={pagination?.totalCount}
            className="text-center"
            onChange={(page) => {
              setPageIndex(page);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default RightContainer;
