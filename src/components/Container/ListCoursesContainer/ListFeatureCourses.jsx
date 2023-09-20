import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListCourseAction } from '../../../redux/slice/courseSlice';
import Slider from 'react-slick';

const ListFeatureCourses = () => {
  const dispatch = useDispatch();
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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {listCourse.map((course, index) => {
        return (
          <div className="!flex p-6 border rounded-2xl" key={course.courseId}>
            <div className="mr-6 flex flex-1">
              <img
                src={course.courseImg}
                className="aspect-video rounded-2xl shadow-xl object-cover h-full w-full"
                alt="course avatar"
              />
            </div>

            <div className="flex flex-col flex-1">
              <h1>Title</h1>
              <h1>Title</h1>
              <h1>Title</h1>
              <h1>Title</h1>
              <h1>Title</h1>
              <h1>Title</h1>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default ListFeatureCourses;
