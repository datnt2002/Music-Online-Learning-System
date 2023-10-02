import React from 'react';
import { useSelector } from 'react-redux';
import { Select, Menu, Pagination } from 'antd';

import CourseHorizontalCard from '../CardTemplate/CourseHorizontalCard';
import { Categories } from '../../../constants/mockData';

const AllCourses = () => {
  const listCategories = useSelector((state) => state.course.listCategory);
  const listCourses = useSelector((state) => state.course.listCourse);

  const handleSelectCategory = (value) => {
    console.log(`selected ${value}`);
  };
  const handleFilterBySubCate = ({ key }) => {
    console.log('click ', key);
  };

  const items = listCategories.map((cate) => {
    return {
      key: cate.cateId,
      label: cate.cateName,
      children: Categories.filter((subCate) => {
        return subCate.cateId === cate.cateId;
      }).map((subCate) => {
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
        <Select
          defaultValue="Choose category"
          size="large"
          onChange={handleSelectCategory}
          options={listCategories.map((cate) => {
            return { value: cate.cateId, label: cate.cateName };
          })}
        />
        <p className="flex flex-1 justify-end items-center">2000 courses</p>
      </div>

      <div className="flex">
        <div className="flex flex-col basis-1/4">
          <Menu
            onClick={handleFilterBySubCate}
            style={{
              width: 256,
            }}
            mode="inline"
            items={items}
          />
        </div>
        <div className="flex flex-1 flex-col gap-3">
          {listCourses.map((course) => {
            return <CourseHorizontalCard courseData={course} />;
          })}

          <Pagination defaultCurrent={6} total={500} />
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
