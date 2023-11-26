import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { Button, Form, Input, InputNumber, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { UploadOutlined } from '@ant-design/icons';
import { Content } from 'antd/es/layout/layout';

import {
  editDraftCourseAction,
  getDetailDraftCourseAction,
  getListCategoryAction,
  getSubCategoriesByCategoryAction,
} from '../../../redux/slice/courseSlice';
import { EDIT_COURSE_FORM_FIELDS, PAGINATION, VALIDATE_MESSAGE } from '../../../constants';
import ExpandedForm from '../../../components/Container/FormListContainer/ExpandedForm';
import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import Loading from '../../../components/Common/Loading';
import repeatBg from '../../../assets/imgs/repeatbg.jpg';
import splitSlash from '../../../utils/splitSlash';
import defaultCourse from '../../../assets/imgs/default-course.png';

const EditCourse = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const pathNameArray = splitSlash(pathname);

  const listCategories = useSelector((state) => state.course.listCategory);
  const listSubCategories = useSelector((state) => state.course.listSubcategories);
  const loading = useSelector((state) => state.course.loading);
  const currentEditCourse = useSelector((state) => state.course.currentCourse);

  useEffect(() => {
    dispatch(
      getDetailDraftCourseAction({
        courseId: pathNameArray[2],
      })
    );
    dispatch(getListCategoryAction({ pageSize: PAGINATION.PAGE_SIZE }));
  }, []);

  useEffect(() => {
    let knowledgeArr, requirementArr;
    if (currentEditCourse?.course?.knowledge) {
      knowledgeArr = currentEditCourse?.course?.knowledge.split(',');
    }
    if (currentEditCourse?.course?.requirement) {
      requirementArr = currentEditCourse?.course?.requirement.split(',');
    }
    const initData = {
      courseId: currentEditCourse?.course?.courseId,
      courseName: currentEditCourse?.course?.courseName,
      brief: currentEditCourse?.course?.brief,
      price: currentEditCourse?.course?.price,
      description: currentEditCourse?.course?.description,
      knowledge: knowledgeArr,
      requirement: requirementArr,
    };

    form.setFieldsValue(initData);

    form.setFieldsValue({
      [EDIT_COURSE_FORM_FIELDS.CATEGORY]: currentEditCourse?.subCate?.cateId,
      [EDIT_COURSE_FORM_FIELDS.SUB_CATEGORY]: currentEditCourse?.subCate?.subCateId,
    });
    dispatch(getSubCategoriesByCategoryAction({ cateId: currentEditCourse?.subCate?.cateId }));
  }, [form, currentEditCourse]);

  const handleEditCourse = (values) => {
    console.log('form', values);

    dispatch(
      editDraftCourseAction({
        courseId: values.courseId,
        courseName: values.courseName,
        description: values.description,
        brief: values.brief,
        price: values.price,
        isFree: values.price > 0 ? false : true,
        subCateId: values.subcategory,
        knowledge: values.knowledge,
        requirement: values.requirement,
        navigate,
      })
    );
  };

  const handleChooseCategory = (value) => {
    dispatch(getSubCategoriesByCategoryAction({ cateId: value }));
  };

  const handleEditCourseImg = () => {};

  const formLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
  };

  return (
    <Content className="min-h-screen" style={{ backgroundImage: `url(${repeatBg})`, backgroundSize: '100% auto' }}>
      {loading && <Loading />}
      <div className="flex flex-1 flex-col p-6">
        <div className="pl-6 mb-4">
          <BreadCrumbCustom />
        </div>

        {/* form */}
        <div className="bg-white rounded-2xl p-6 border border-black">
          <h1 className="font-semibold text-2xl">Edit Course</h1>

          <Form layout="horizontal" form={form} onFinish={handleEditCourse} {...formLayout} labelWrap>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-3/5 p-5">
                <div className="relative mx-auto mb-6 h-40 w-3/5 overflow-hidden border border-black group">
                  <img
                    src={currentEditCourse?.course?.courseImg || defaultCourse}
                    alt=""
                    className="aspect-video group-hover:opacity-75 transition-opacity duration-300 ease-in-out"
                    onClick={handleEditCourseImg}
                  />
                  <UploadOutlined className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
                </div>
                <Form.Item label={EDIT_COURSE_FORM_FIELDS.COURSE_ID_LABEL} name={EDIT_COURSE_FORM_FIELDS.COURSE_ID}>
                  <Input className="rounded-md" disabled />
                </Form.Item>

                <Form.Item
                  label={EDIT_COURSE_FORM_FIELDS.COURSE_NAME_LABEL}
                  name={EDIT_COURSE_FORM_FIELDS.COURSE_NAME}
                  rules={[{ required: true, message: VALIDATE_MESSAGE.COURSE_NAME_REQUIRED }]}
                >
                  <Input className="rounded-md" />
                </Form.Item>
                <Form.Item
                  label={EDIT_COURSE_FORM_FIELDS.CATEGORY_LABEL}
                  name={EDIT_COURSE_FORM_FIELDS.CATEGORY}
                  rules={[{ required: true, message: VALIDATE_MESSAGE.CATEGORY_REQUIRED }]}
                >
                  <Select onChange={handleChooseCategory} className="rounded-md">
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
                  label={EDIT_COURSE_FORM_FIELDS.SUB_CATEGORY_LABEL}
                  name={EDIT_COURSE_FORM_FIELDS.SUB_CATEGORY}
                  rules={[{ required: true, message: VALIDATE_MESSAGE.SUB_CATEGORY_REQUIRED }]}
                >
                  <Select className="rounded-md">
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
                  label={EDIT_COURSE_FORM_FIELDS.BRIEF_DESCRIPTION_LABEL}
                  name={EDIT_COURSE_FORM_FIELDS.BRIEF_DESCRIPTION}
                  rules={[{ required: true, message: VALIDATE_MESSAGE.BRIEF_DESCRIPTION_REQUIRED }]}
                >
                  <Input className="rounded-md" />
                </Form.Item>
                <Form.Item
                  label={EDIT_COURSE_FORM_FIELDS.PRICE_LABEL}
                  name={EDIT_COURSE_FORM_FIELDS.PRICE}
                  rules={[{ required: true, message: VALIDATE_MESSAGE.PRICE_REQUIRED }]}
                >
                  <InputNumber className="w-full rounded-md" />
                </Form.Item>
                <Form.Item
                  label={EDIT_COURSE_FORM_FIELDS.DESCRIPTION_LABEL}
                  name={EDIT_COURSE_FORM_FIELDS.DESCRIPTION}
                  rules={[{ required: true, message: VALIDATE_MESSAGE.DESCRIPTION_REQUIRED }]}
                >
                  <TextArea rows={4} className="rounded-md" />
                </Form.Item>
              </div>

              {/* what will learn block */}
              <div className="flex flex-1 flex-col md:w-2/5 mt-4 md:mt-0">
                <ExpandedForm
                  title="Knowledge"
                  placeholder="Knowledge"
                  nameFormList={EDIT_COURSE_FORM_FIELDS.WHAT_WILL_LEARN}
                />
                <ExpandedForm
                  title="Requirement"
                  placeholder="Requirement"
                  nameFormList={EDIT_COURSE_FORM_FIELDS.REQUIREMENT}
                />
                <Form.Item className="flex-1 mx-5" wrapperCol={{ span: 24 }}>
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

export default EditCourse;
