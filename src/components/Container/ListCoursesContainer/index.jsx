import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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

  const listCourse = useSelector((state) => state.course.listCourse);
  console.log(listCourse);

  const settings = {
    className: 'slider variable-width',
    dots: true,
    infinite: true,
    centerMode: false,
    variableWidth: true,

    // initialSlide: 0,
  };

  const handleViewDetailCourse = (courseId) => {
    navigate(`${PUBLIC_ROUTE.COURSE_DETAIL}/${courseId}`);
  };
  return (
    <div className="">
      <Slider {...settings}>
        {listCourse.map((course) => {
          return (
            <div key={course.courseId} className="my-3 mr-3 ">
              <div
                onClick={() => handleViewDetailCourse(course.courseId)}
                className="relative flex w-[13rem] h-80 flex-col border rounded-lg shadow-lg backdrop-blur-3xl bg-white/80 hover:scale-105"
              >
                <div className="relative m-4 h-40 overflow-hidden">
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
