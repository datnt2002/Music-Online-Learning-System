import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListCourseFilterByCateAction } from '../../../redux/slice/courseSlice';
import { useNavigate } from 'react-router-dom';

const SubNavCategory = () => {
  const categories = useSelector((state) => state.course.listCategory);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFilterCourseByCate = (cateId) => {
    console.log(cateId);
    dispatch(
      getListCourseFilterByCateAction({
        cateId: cateId,
        navigate,
      })
    );
  };

  return (
    <div className="flex-col md:flex md:flex-row h-full content-center flex-wrap">
      {categories.length > 0 ? (
        categories.map((category) => {
          return (
            <p
              onClick={() => handleFilterCourseByCate(category.cateId)}
              className="flex-1 text-center cursor-pointer mb-2 md:mb-0"
              key={category.cateId}
            >
              {category.cateName}
            </p>
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SubNavCategory;
