import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Pagination } from 'antd';

import CourseHorizontalCard from '../CardTemplate/CourseHorizontalCard';
import { getListCourseAction } from '../../../redux/slice/courseSlice';

const AllCourses = () => {
  const listCategories = useSelector((state) => state.course.listCategory);
  const listCourses = useSelector((state) => state.course.listCourse);
  const listSubCate = useSelector((state) => state.course.listSubcategories);
  const pagination = useSelector((state) => state.course.pagination);

  const [pageIndex, setPageIndex] = useState(1);
  const dispatch = useDispatch();
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

  useEffect(() => {
    dispatch(
      getListCourseAction({
        pageIndex: pageIndex,
        pageSize: 5,
      })
    );
  }, []);

  return (
    <div>
      <div className="flex py-4 pr-4 my-4">
        <p className="flex flex-1 justify-end items-center">{pagination?.totalCount} courses</p>
      </div>

      <div className="flex flex-col lg:flex lg:flex-row">
        <div className="flex flex-col basis-1/4 mb-2 lg:mr-4 lg:mb-0">
          <Menu onClick={handleFilterBySubCate} mode="inline" items={items} className="rounded-2xl bg-white/50" />
        </div>
        <div className="flex flex-1 flex-col gap-3">
          {listCourses.map((course, index) => {
            return index < 5 ? <CourseHorizontalCard courseData={course} /> : <></>;
          })}

          <Pagination
            defaultCurrent={1}
            current={pageIndex}
            pageSize={5}
            total={pagination?.totalCount}
            className="text-center"
            onChange={(page) => {
              setPageIndex(page);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
