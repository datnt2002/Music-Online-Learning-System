import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { getListCourseAction } from '../../../redux/slice/courseSlice';
import { PUBLIC_ROUTE } from '../../../constants';

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
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <RightCircleOutlined />
      </div>
    );
  }

  const listCourse = useSelector((state) => state.course.listCourse);
  console.log(listCourse);

  const settings = {
    className: 'slider variable-width',
    dots: true,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
  };

  const handleViewDetailCourse = (courseId) => {
    navigate(`${PUBLIC_ROUTE.COURSE_DETAIL}/${courseId}`);
  };
  return (
    <div className="">
      <Slider {...settings}>
        {listCourse.map((course) => {
          return (
            <div key={course.courseId} className="my-3 mr-3">
              <div
                onClick={() => handleViewDetailCourse(course.courseId)}
                className="relative flex w-[15rem] h-80 flex-col rounded-xl bg-white shadow-xl hover:scale-105"
              >
                <div className="relative mx-4 h-40 overflow-hidden rounded-xl shadow-lg">
                  <img src={course.courseImg} alt="" className="object-cover h-full w-full" />
                </div>
                <div className="p-6">
                  <h1 className="mb-2 truncate text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {course.courseName}
                  </h1>
                  <p className=" font-sans text-xs font-light leading-relaxed truncate">{course.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ListContainer;
