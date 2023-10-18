import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Form, Layout, Modal, Space } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { EditOutlined } from '@ant-design/icons';

import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import ExpandedTable from '../../../components/Container/TableAdmin/ExpandedTable';
import { editCategoryAction, getListCategoryAction, getSubCategoriesAction } from '../../../redux/slice/courseSlice';
import ModalEditCategory from '../../../components/Container/ModalContainer/ModalEditCategory';
import { PAGINATION } from '../../../constants';

const ManageListCategories = () => {
  const [open, setOpen] = useState(false);
  const [dataOfRecord, setDataOfRecord] = useState();
  const [pageIndex, setPageIndex] = useState(1);
  const [form] = Form.useForm();

  const dispatch = useDispatch();
  const listCategories = useSelector((state) => state.course.listCategory);
  const listSubcategories = useSelector((state) => state.course.listSubcategories);
  const pagination = useSelector((state) => state.course.pagination);

  useEffect(() => {
    dispatch(
      getListCategoryAction({
        pageIndex: pageIndex,
        pageSize: PAGINATION.PAGE_SIZE,
      })
    );
    return () => {};
  }, [dispatch, pageIndex]);

  const handleEditCategory = (record) => {
    dispatch(
      editCategoryAction({
        cateId: record.cateId,
        cateName: record.cateName,
      })
    );
    setOpen(false);
  };

  const showModal = (record) => {
    setDataOfRecord(record);
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleGetSubCategories = (record) => {
    console.log(record);
    dispatch(
      getSubCategoriesAction({
        cateId: record.cateId,
      })
    );
  };

  return (
    <Layout
      style={{
        padding: '0 24px 24px',
      }}
    >
      <div className="my-5 ml-6">
        <BreadCrumbCustom />
      </div>
      <Content
        className="h-screen"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <ExpandedTable
          dataSource={listCategories}
          pagination={pagination}
          setPageIndex={setPageIndex}
          onClickExpand={handleGetSubCategories}
          expandedData={listSubcategories}
          actions={(record) => (
            <Space>
              <Button
                onClick={() => {
                  showModal(record);
                }}
                icon={<EditOutlined />}
              />
            </Space>
          )}
        />
        {open && (
          <Modal
            open={open}
            title="Edit Category"
            onCancel={handleCancel}
            footer={[
              <Button key="back" onClick={handleCancel}>
                Return
              </Button>,
              <Button
                className="bg-black"
                key="submit"
                type="primary"
                onClick={() => {
                  form.submit();
                }}
              >
                Edit category
              </Button>,
            ]}
          >
            {dataOfRecord && <ModalEditCategory onFinish={handleEditCategory} form={form} data={dataOfRecord} />}
          </Modal>
        )}
      </Content>
    </Layout>
  );
};

export default ManageListCategories;
