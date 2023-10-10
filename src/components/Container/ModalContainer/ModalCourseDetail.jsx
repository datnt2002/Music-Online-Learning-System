import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Divider, Menu } from 'antd';
import { ClockCircleOutlined, CaretRightOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

import courseImg from '../../../assets/imgs/default-course.png';
import Loading from '../../Common/Loading';
import { DAY_FORMAT } from '../../../constants';

function getItem(label, key, children, type) {
  return {
    key,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Navigation One', 'sub1', [
    getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),
];
const ModalCourseDetail = () => {
  const data = useSelector((state) => state.course.currentCourse);
  const loading = useSelector((state) => state.course.loading);
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <>
      {loading && <Loading />}
      <Divider className="bg-black" />
      <div className="flex bg-white text-black py-14 mx-auto h-72">
        <div className="ml-16 flex flex-1 flex-col">
          <h1 className="mr-2">Course ID: {data.courseId}</h1>
          <h1 className="mr-2">Price: ${data.price}</h1>
          <h2 className="text-xl my-2">{data.courseName}</h2>

          <p className="my-2">
            Created by <Link className="underline">{data.createdBy}</Link>
          </p>

          <p className="mr-2">
            <ClockCircleOutlined className="align-[0.125rem]" /> Last update at
            {dayjs(data.createdAt).format(DAY_FORMAT.D_M_Y)}
          </p>
        </div>
        <div className="flex flex-1 mr-16">
          <img src={data.courseImg || courseImg} alt="" className="" />
        </div>
      </div>
      <Divider className="bg-black my-0" />

      <div className="mx-auto">
        <div className="ml-10">
          {/* course content */}
          <div className="my-6">
            <h2 className="text-xl mb-4 font-medium">Course Content</h2>
            <div className="flex">
              <p>31 sections</p>
              <p>
                <CaretRightOutlined className="align-[0.125rem]" /> 411 lectures
              </p>
              <p>
                <CaretRightOutlined className="align-[0.125rem]" /> 67h 10m total length
              </p>
            </div>
            <Menu onClick={onClick} mode="inline" items={items} />
          </div>

          {/* description */}
          <div className="my-6">
            <h2 className="text-xl mb-4 font-medium">Description</h2>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCourseDetail;
