import React from 'react';

import { Button, Form, Input, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';

import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import { CREATE_CATEGORY_FORM_FIELDS } from '../../../constants';
import { useDispatch } from 'react-redux';
import { createCategoryAction } from '../../../redux/slice/courseSlice';
import { useNavigate } from 'react-router-dom';

const CreateNewCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCreateNewCategory = (values) => {
    console.log(values);
    dispatch(
      createCategoryAction({
        cateName: values.cateName,
        navigate,
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
        <div className="bg-white shadow-xl rounded-2xl p-6 ">
          <h1 className="font-semibold text-2xl ml-5">Create New Category</h1>
          <Form layout="horizontal" onFinish={handleCreateNewCategory}>
            <div className="flex">
              <div className="flex flex-col flex-1 p-5">
                <Form.Item label={CREATE_CATEGORY_FORM_FIELDS.TITLE} name={CREATE_CATEGORY_FORM_FIELDS.CATEGORY_NAME}>
                  <Input placeholder={CREATE_CATEGORY_FORM_FIELDS.CATEGORY_PLACEHOLDER} />
                </Form.Item>

                <Form.Item className="flex-1">
                  <Button type="primary" htmlType="submit" className="bg-amber-500 w-full">
                    Submit
                  </Button>
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </Content>
    </Layout>
  );
};

export default CreateNewCategory;
