import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Carousel, Rate } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import { getListCourseAction } from '../../../redux/slice/courseSlice';
import { PUBLIC_ROUTE, STORAGE } from '../../../constants';
import defaultCourse from '../../../assets/imgs/default-course.png';
import formatPrice from '../../../utils/formatPrice';

const ListContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      getListCourseAction({
        pageIndex: 1,
        pageSize: 20,
      })
    );
  }, [dispatch]);

  const listCourse = useSelector((state) => state.course.listCourse);

  const ref = useRef();

  const handleViewDetailCourse = (courseId) => {
    navigate(`${PUBLIC_ROUTE.COURSE_DETAIL}/${courseId}`);
    localStorage.setItem(STORAGE.COURSE_ID, courseId);
  };

  return (
    <div className="relative">
      <Button
        className="border border-black rounded-full mb-3"
        icon={<LeftOutlined className="align-[0.125rem]" />}
        onClick={() => {
          ref.current.prev();
        }}
      />
      <Carousel ref={ref} rows={1} slidesPerRow={5} dots={false} draggable infinite={true}>
        {listCourse.map((course) => {
          return (
            <div key={course.courseId} className="my-3 mr-3">
              <div
                onClick={() => handleViewDetailCourse(course.courseId)}
                className="relative flex w-[14rem] h-80 flex-col border border-black rounded-lg hover:scale-105"
              >
                <div className="relative m-4 h-40 overflow-hidden">
                  <img src={course.courseImg || defaultCourse} alt="error" className="object-cover h-full w-full" />
                </div>
                <div className="px-6 pb-6 pt-3">
                  <h1 className="truncate text-lg font-bohemian font-semibold leading-snug text-blue-gray-900 antialiased">
                    {course.courseName}
                  </h1>
                  <p className="underline font-sans text-xs font-light leading-relaxed truncate">Author</p>
                  <div className="flex">
                    <p className="font-sans text-sm font-light leading-relaxed truncate"> 4.5</p>
                    <Rate disabled allowHalf defaultValue={2.5} className="leading-none mx-2" />
                  </div>
                  <p className="font-sans text-base font-medium leading-relaxed truncate">
                    ${formatPrice(course.price)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
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

export default ListContainer;
