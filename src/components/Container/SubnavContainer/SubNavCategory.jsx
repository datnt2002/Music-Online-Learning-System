import React from 'react';
import { useSelector } from 'react-redux';

const SubNavCategory = () => {
  const categories = useSelector((state) => state.course.listCategory);

  return (
    <div className="flex-col md:flex md:flex-row h-full content-center flex-wrap">
      {categories.length > 0 ? (
        categories.map((category) => {
          return (
            <p className="flex-1 text-center cursor-pointer mb-2 md:mb-0" key={category.cateId}>
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
