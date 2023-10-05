import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RightCircleOutlined } from '@ant-design/icons';

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
    const { className, onClick } = props;
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
    centerMode: false,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    // initialSlide: 0,
  };

  const handleViewDetailCourse = (courseId) => {
    navigate(`${PUBLIC_ROUTE.COURSE_DETAIL}/${courseId}`);
  };
  return (
    <div>
      <Slider {...settings}>
        {listCourse.map((course) => {
          return (
            <div key={course.courseId} className="my-3 mr-3">
              <div
                onClick={() => handleViewDetailCourse(course.courseId)}
                className="relative flex w-[13rem] h-80 flex-col rounded-xl bg-white shadow-xl hover:scale-105"
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
