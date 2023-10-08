import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { getListCourseAction } from '../../../redux/slice/courseSlice';
import { PUBLIC_ROUTE } from '../../../constants';
import { Rate } from 'antd';
import defaultCourse from '../../../assets/imgs/default-course.png';

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

  const settings = {
    className: 'slider variable-width',
    dots: true,
    infinite: true,
    centerMode: false,
    variableWidth: true,
  };

  const handleViewDetailCourse = (courseId) => {
    navigate(`${PUBLIC_ROUTE.COURSE_DETAIL}/${courseId}`);
  };

  return (
    <Slider {...settings}>
      {listCourse.map((course) => {
        return (
          <div key={course.courseId} className="my-3 mr-3">
            <div
              onClick={() => handleViewDetailCourse(course.courseId)}
              className="relative flex w-[16rem] h-80 flex-col border border-black rounded-lg backdrop-blur-3xl bg-white/50 bg-opacity-80 hover:scale-105"
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
                <p className="font-sans text-base font-medium leading-relaxed truncate">${course.price}</p>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default ListContainer;
