import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { getListCategoryAction, getSubCategoriesAction } from '../../../redux/slice/courseSlice';
import { PAGINATION } from '../../../constants';

const CategoryDropdown = () => {
  const categories = useSelector((state) => state.course.listCategory);
  const listSubCate = useSelector((state) => state.course.listSubcategories);
  console.log(listSubCate);
  const items = categories.map((category) => {
    return {
      key: category.cateId,
      label: category.cateName,
      children: listSubCate
        .filter((subCate) => {
          return subCate.cateId === category.cateId;
        })
        .map((subCate) => {
          return {
            key: subCate.subCateId,
            label: subCate.subCateName,
          };
        }),
    };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getListCategoryAction({
        pageSize: PAGINATION.PAGE_SIZE,
      })
    );
    dispatch(getSubCategoriesAction({}));
  }, [dispatch]);

  const handleChooseSubCategory = ({ key }) => {
    console.log(`Click on item ${key}`);
  };
  return (
    <Dropdown
      menu={{
        items,
        onClick: handleChooseSubCategory,
      }}
      className="cursor-pointer"
    >
      <Space>
        Category
        <DownOutlined className="align-[0.05rem]" />
      </Space>
    </Dropdown>
  );
};

export default CategoryDropdown;
