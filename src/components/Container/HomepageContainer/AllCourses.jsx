import React from 'react';
import { useSelector } from 'react-redux';
import { Menu, Pagination } from 'antd';

import CourseHorizontalCard from '../CardTemplate/CourseHorizontalCard';

const AllCourses = () => {
  const listCategories = useSelector((state) => state.course.listCategory);
  const listCourses = useSelector((state) => state.course.listCourse);
  const listSubCate = useSelector((state) => state.course.listSubcategories);
  const handleFilterBySubCate = ({ key }) => {
    console.log('click ', key);
  };

  const items = listCategories.map((cate) => {
    return {
      key: cate.cateId,
      label: cate.cateName,
      children: listSubCate
        .filter((subCate) => {
          return subCate.cateId === cate.cateId;
        })
        .map((subCate) => {
          return {
            key: subCate.subCateId,
            label: subCate.subCateName,
          };
        }),
    };
  });

  return (
    <div>
      <div className="flex py-4 pr-4 my-4">
        <p className="flex flex-1 justify-end items-center">2000 courses</p>
      </div>

      <div className="flex">
        <div className="flex flex-col basis-1/4 mr-4">
          <Menu onClick={handleFilterBySubCate} mode="inline" items={items} className="rounded-2xl bg-white/50" />
        </div>
        <div className="flex flex-1 flex-col gap-3">
          {listCourses.map((course) => {
            return <CourseHorizontalCard courseData={course} />;
          })}

          <Pagination defaultCurrent={6} total={500} className="text-center" />
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
