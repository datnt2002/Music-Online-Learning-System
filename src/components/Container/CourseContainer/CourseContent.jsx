import React from 'react';
import { CaretRightOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { USER_ROUTE } from '../../../constants';

const CourseContent = () => {
  const sections = useSelector((state) => state.course.listSections);
  const navigate = useNavigate();

  const items = sections.map((section) => {
    return {
      key: section.sectionId,
      label: section.sectionName,
      children: section.Lessons.map((lesson) => {
        return {
          key: lesson.lessonId,
          label: lesson.lessonName,
          icon: <VideoCameraOutlined />,
        };
      }),
    };
  });

  const onClick = (e) => {
    console.log('click ', e.key);
    navigate(`${USER_ROUTE.LESSON_DETAIL}/${e.key}`);
  };
  return (
    <div className="my-6">
      <h2 className="text-xl mb-4 font-medium">Course Content</h2>
      <div className="flex justify-between">
        <div className="flex">
          <p>31 sections</p>
          <p>
            <CaretRightOutlined className="align-[0.125rem]" /> 411 lectures
          </p>
          <p>
            <CaretRightOutlined className="align-[0.125rem]" /> 67h 10m total length
          </p>
        </div>
      </div>

      <Menu className=" bg-white/90 rounded-2xl mt-6" onClick={onClick} mode="inline" items={items} />
    </div>
  );
};

export default CourseContent;
