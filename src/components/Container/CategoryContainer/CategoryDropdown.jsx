import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { getListCategoryAction, getSubCategoriesAction } from '../../../redux/slice/courseSlice';
import { PAGINATION, PUBLIC_ROUTE } from '../../../constants';
import { useNavigate } from 'react-router-dom';

const CategoryDropdown = () => {
  const categories = useSelector((state) => state.course.listCategory);
  const listSubCate = useSelector((state) => state.course.listSubcategories);
  const navigate = useNavigate();
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
    navigate(PUBLIC_ROUTE.FILTER_SUB_CATE + `/${key}`);
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
