import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Divider, Menu } from 'antd';
import { ClockCircleOutlined, CaretRightOutlined, VideoCameraOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

import courseImg from '../../../assets/imgs/default-course.png';
import Loading from '../../Common/Loading';
import { DAY_FORMAT, USER_ROUTE } from '../../../constants';
import formatPrice from '../../../utils/formatPrice';

const ModalCourseDetail = () => {
  const data = useSelector((state) => state.course.currentCourse);
  const listSections = useSelector((state) => state.course.listSections);
  const loading = useSelector((state) => state.course.loading);
  console.log(data);
  const navigate = useNavigate();

  const items = listSections.map((section) => {
    return {
      key: section?.sectionId,
      label: section?.sectionName,
      children: section?.Lessons.map((lesson) => {
        return {
          key: lesson?.lessonId,
          label: lesson?.lessonName,
          icon: <VideoCameraOutlined />,
        };
      }),
    };
  });
  const onClick = (e) => {
    console.log('click ', e);
    navigate(`${USER_ROUTE.LESSON_DETAIL}/${e.key}`);
  };
  return (
    <>
      {loading && <Loading />}
      <Divider className="bg-black" />
      <div className="flex flex-col md:flex-row bg-white text-black py-14 mx-auto h-auto">
        <div className="ml-2 mb-2 md:ml-16 md:mb-0 flex flex-1 flex-col">
          <h1 className="mr-2">Course ID: {data?.course?.courseId}</h1>
          <h1 className="mr-2">Price: ${data?.course?.price && formatPrice(data?.course?.price)}</h1>
          <h2 className="text-xl my-2 font-bohemian">{data?.course?.courseName}</h2>

          <p className="my-2">
            Created by <Link className="underline">{data?.course?.createdBy}</Link>
          </p>

          <p className="mr-2">
            <ClockCircleOutlined className="align-[0.125rem]" /> <span className="mr-1">Last update at</span>
            {dayjs(data?.course?.createdAt).format(DAY_FORMAT.D_M_Y)}
          </p>
        </div>
        <div className="flex flex-1 mx-auto md:mr-16">
          <img src={data?.course?.courseImg || courseImg} alt="" className="aspect-video" />
        </div>
      </div>
      <Divider className="bg-black my-0" />

      <div className="mx-auto">
        <div className="ml-10">
          {/* course content */}
          <div className="my-6">
            <h2 className="text-xl mb-4 font-medium">Course Content</h2>
            <div className="flex">
              <p>{data?.sectionCount} sections</p>
              <p>
                <CaretRightOutlined className="align-[0.1rem]" /> {data?.lessonCount} lectures
              </p>
            </div>
            <Menu onClick={onClick} mode="inline" items={items} />
          </div>

          {/* description */}
          <div className="my-6">
            <h2 className="text-xl mb-4 font-medium">Description</h2>
            <p>{data?.course?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCourseDetail;
