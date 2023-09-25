import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Form, Layout, Modal, Space } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { EditOutlined } from '@ant-design/icons';

import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import ExpandedTable from '../../../components/Container/TableAdmin/ExpandedTable';
import { editCategoryAction, getListCategoryAction } from '../../../redux/slice/courseSlice';
import ModalEditCategory from '../../../components/Container/ModalContainer/ModalEditCategory';

const ManageListCategories = () => {
  const [open, setOpen] = useState(false);
  const [dataOfRecord, setDataOfRecord] = useState();
  const [form] = Form.useForm();

  const dispatch = useDispatch();
  const listCategories = useSelector((state) => state.course.listCategory);

  useEffect(() => {
    dispatch(
      getListCategoryAction({
        pageIndex: 1,
        pageSize: 5,
      })
    );
    return () => {};
  }, [dispatch]);

  const handleEditCategory = async (record) => {
    console.log(record);
    await dispatch(
      editCategoryAction({
        cateId: record.cateId,
        cateName: record.cateName,
      })
    );
    setOpen(false);
    console.log('Before dispatch:', listCategories);
    await dispatch(
      getListCategoryAction({
        pageIndex: 1,
        pageSize: 5,
      })
    );
    console.log('After dispatch:', listCategories);
  };

  const showModal = (record) => {
    setDataOfRecord(record);
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
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
          actions={(record) => (
            <Space>
              <>
                <Button
                  onClick={() => {
                    showModal(record);
                  }}
                  icon={<EditOutlined />}
                />
                <Modal
                  open={open}
                  title="Edit Category"
                  onCancel={handleCancel}
                  footer={[
                    <Button key="back" onClick={handleCancel}>
                      Return
                    </Button>,
                    <Button
                      className="bg-amber-500"
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
              </>
            </Space>
          )}
        />
      </Content>
    </Layout>
  );
};

export default ManageListCategories;
