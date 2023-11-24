import React, { useEffect, useState } from 'react';
import { CheckOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const WhatLearnDetail = () => {
  const currentCourse = useSelector((state) => state.course.currentCourse);
  const [listKnowledge, setListKnowledge] = useState([]);

  useEffect(() => {
    const knowledge = currentCourse?.course?.knowledge;
    let knowledgeArr = [];
    if (knowledge) {
      knowledgeArr = knowledge.split(',');
    }
    setListKnowledge(knowledgeArr);
  }, [currentCourse]);
  return (
    <div className="rounded-2xl border-2 shadow-md border-black py-4 ">
      <h2 className="text-xl mx-6 mb-2 font-medium"> What you learn in this course</h2>
      <ul className="flex flex-col flex-wrap justify-between mx-6">
        {listKnowledge.map((knowledge, index) => {
          return (
            <li className="mb-1" key={index}>
              <CheckOutlined className="align-[0.125rem]" /> {knowledge}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WhatLearnDetail;
