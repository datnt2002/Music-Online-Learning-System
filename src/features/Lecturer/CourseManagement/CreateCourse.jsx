import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import ImgCrop from 'antd-img-crop';
import { Button, Form, Input, InputNumber, Select, Upload, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { InboxOutlined } from '@ant-design/icons';
import { Content } from 'antd/es/layout/layout';

import { createNewCourseAction, getListCategoryAction, getSubCategoriesAction } from '../../../redux/slice/courseSlice';
import { CREATE_COURSE_FORM_FIELDS, PAGINATION, VALIDATE_MESSAGE } from '../../../constants';
import ExpandedForm from '../../../components/Container/FormListContainer/ExpandedForm';
import StepsCustom from '../../../components/Container/StepsContainer/StepsCustom';
import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import Loading from '../../../components/Common/Loading';
import repeatBg from '../../../assets/imgs/repeatbg.jpg';

const CreateCourse = () => {
  const [file, setFile] = useState();
  const listCategories = useSelector((state) => state.course.listCategory);
  const listSubCategories = useSelector((state) => state.course.listSubcategories);
  const loading = useSelector((state) => state.course.loading);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log('form', values);

    dispatch(
      createNewCourseAction({
        courseName: values.courseName,
        description: values.description,
        price: values.price,
        isFree: values.price > 0 ? false : true,
        subCateId: values.subcategory,
        file: file,
        navigate,
      })
    );
  };

  useEffect(() => {
    dispatch(getListCategoryAction({ pageSize: PAGINATION.PAGE_SIZE }));
  }, [dispatch]);

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
  };

  const handleChooseCategory = (value) => {
    dispatch(getSubCategoriesAction({ cateId: value }));
  };
  return (
    <Content>
      {loading && <Loading />}
      <div
        className="flex flex-1 flex-col p-6"
        style={{ backgroundImage: `url(${repeatBg})`, backgroundSize: '100% auto' }}
      >
        <div className="pl-6">
          <BreadCrumbCustom />
        </div>
        <StepsCustom step={0} />

        {/* form */}
        <div className="bg-white border border-black rounded-2xl p-6 ">
          <h1 className="font-semibold text-2xl">Create New Course</h1>
          <Form layout="horizontal" onFinish={onFinish}>
            <div className="flex">
              <div className="flex flex-col basis-3/5 p-5">
                <Form.Item
                  label={CREATE_COURSE_FORM_FIELDS.COURSE_NAME_LABEL}
                  name={CREATE_COURSE_FORM_FIELDS.COURSE_NAME}
                  rules={[{ required: true, message: VALIDATE_MESSAGE.COURSE_NAME_REQUIRED }]}
                >
                  <Input className="border border-black rounded-md" />
                </Form.Item>
                <Form.Item
                  label={CREATE_COURSE_FORM_FIELDS.CATEGORY_LABEL}
                  name={CREATE_COURSE_FORM_FIELDS.CATEGORY}
                  rules={[{ required: true, message: VALIDATE_MESSAGE.CATEGORY_REQUIRED }]}
                >
                  <Select onChange={handleChooseCategory} className="border border-black rounded-md">
                    {listCategories.map((category) => {
                      return (
                        <Select.Option key={category.cateId} value={category.cateId}>
                          {category.cateName}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                <Form.Item
                  label={CREATE_COURSE_FORM_FIELDS.SUB_CATEGORY_LABEL}
                  name={CREATE_COURSE_FORM_FIELDS.SUB_CATEGORY}
                  rules={[{ required: true, message: VALIDATE_MESSAGE.SUB_CATEGORY_REQUIRED }]}
                >
                  <Select className="border border-black rounded-md">
                    {listSubCategories.map((subCate) => {
                      return (
                        <Select.Option key={subCate.subCateId} value={subCate.subCateId}>
                          {subCate.subCateName}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                <Form.Item
                  label={CREATE_COURSE_FORM_FIELDS.BRIEF_DESCRIPTION_LABEL}
                  name={CREATE_COURSE_FORM_FIELDS.BRIEF_DESCRIPTION}
                  rules={[{ required: true, message: VALIDATE_MESSAGE.BRIEF_DESCRIPTION_REQUIRED }]}
                >
                  <Input className="border border-black rounded-md" />
                </Form.Item>
                <Form.Item
                  label={CREATE_COURSE_FORM_FIELDS.PRICE_LABEL}
                  name={CREATE_COURSE_FORM_FIELDS.PRICE}
                  rules={[{ required: true, message: VALIDATE_MESSAGE.PRICE_REQUIRED }]}
                >
                  <InputNumber className="w-full border border-black rounded-md" />
                </Form.Item>
                <Form.Item
                  label={CREATE_COURSE_FORM_FIELDS.DESCRIPTION_LABEL}
                  name={CREATE_COURSE_FORM_FIELDS.DESCRIPTION}
                  rules={[{ required: true, message: VALIDATE_MESSAGE.DESCRIPTION_REQUIRED }]}
                >
                  <TextArea rows={4} className="border border-black rounded-md" />
                </Form.Item>

                <Form.Item label={CREATE_COURSE_FORM_FIELDS.COURSE_IMAGE_LABEL}>
                  <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={() => {}}>
                    <ImgCrop zoomSlider showReset cropShape="rect" aspect={16 / 9}>
                      <Upload.Dragger
                        onPreview={onPreview}
                        name="files"
                        maxCount={1}
                        customRequest={(info) => {
                          console.log(info);
                          setFile(info.file);
                        }}
                        beforeUpload={beforeUpload}
                      >
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">Support for a single upload.</p>
                      </Upload.Dragger>
                    </ImgCrop>
                  </Form.Item>
                </Form.Item>
              </div>

              {/* what will learn block */}
              <div className="flex flex-1 flex-col">
                <ExpandedForm
                  title="Knowledge"
                  placeholder="What you will learn"
                  nameFormList={CREATE_COURSE_FORM_FIELDS.WHAT_WILL_LEARN}
                />
                <ExpandedForm
                  title="Requirements"
                  placeholder="Requirement"
                  nameFormList={CREATE_COURSE_FORM_FIELDS.REQUIREMENT}
                />
                <Form.Item className="flex-1 mx-5">
                  <Button type="primary" htmlType="submit" className="bg-black w-full">
                    Submit
                  </Button>
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </Content>
  );
};

export default CreateCourse;
