import React from 'react';
import { CaretRightOutlined, PlaySquareOutlined, QuestionOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { USER_ROUTE } from '../../../constants';

const CourseContent = () => {
  const sections = useSelector((state) => state.course.listSections);
  const currentCourse = useSelector((state) => state.course.currentCourse);
  const navigate = useNavigate();

  const items = sections.map((section) => {
    const combineLessons = [...section?.Lessons, ...section?.Quizzes];
    const sortedItems = combineLessons.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    return {
      key: section?.sectionId,
      label: section?.sectionName,
      children: sortedItems.map((lesson) => {
        return lesson?.lessonId
          ? {
              key: lesson?.lessonId,
              label: lesson?.lessonName,
              icon: <PlaySquareOutlined />,
            }
          : {
              key: lesson?.quizId,
              label: lesson?.title,
              icon: <QuestionOutlined />,
            };
      }),
    };
  });

  const onClick = (e) => {
    navigate(`${USER_ROUTE.LESSON_DETAIL}/${e.key}`);
  };

  return (
    <div className="my-6">
      <h2 className="text-xl mb-4 font-medium">Course Content</h2>
      <div className="flex justify-between">
        <div className="flex">
          <p>{currentCourse?.sectionCount} sections</p>
          <p>
            <CaretRightOutlined className="align-[0.125rem]" /> {currentCourse?.lessonCount} lectures
          </p>
        </div>
      </div>

      <Menu className=" bg-white/90 rounded-2xl mt-6" onClick={onClick} mode="inline" items={items} />
    </div>
  );
};

export default CourseContent;
