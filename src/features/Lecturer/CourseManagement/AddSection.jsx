import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { Button, Form, Input } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import { createNewSectionAction, getDetailDraftCourseAction } from '../../../redux/slice/courseSlice';
import repeatBg from '../../../assets/imgs/repeatbg.jpg';
import Loading from '../../../components/Common/Loading';
import splitSlash from '../../../utils/splitSlash';
import { CREATE_SECTION_FORM_FIELDS, VALIDATE_MESSAGE } from '../../../constants';

const AddSection = () => {
  const loading = useSelector((state) => state.course.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { pathname } = location;
  const pathNameArray = splitSlash(pathname);

  useEffect(() => {
    dispatch(
      getDetailDraftCourseAction({
        courseId: pathNameArray[2],
      })
    );
  }, []);

  const handleAddSection = (values) => {
    console.log('Received values of form:', values);
    dispatch(
      createNewSectionAction({
        sections: values.sectionName,
        courseId: pathNameArray[2],
        navigate,
      })
    );
  };
  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 24,
        offset: 6,
      },
    },
  };
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 18,
      },
    },
  };
  return (
    <Content>
      {loading && <Loading />}
      <div className="p-6 min-h-screen" style={{ backgroundImage: `url(${repeatBg})`, backgroundSize: '100% auto' }}>
        <div className="pl-6">
          <BreadCrumbCustom />
        </div>
        <div className="flex flex-1 p-5 m-5 shadow-2xl rounded-2xl">
          <div className="flex flex-1 flex-col">
            <Form {...formItemLayoutWithOutLabel} onFinish={handleAddSection}>
              <Form.List
                name="section"
                rules={[
                  {
                    validator: async (_, names) => {
                      if (!names || names.length < 2) {
                        return Promise.reject(new Error(VALIDATE_MESSAGE.EXPANDED_REQUIRED));
                      }
                    },
                  },
                ]}
              >
                {(fields, { add, remove }, { errors }) => (
                  <>
                    {fields.map((field, index) => (
                      <Form.Item
                        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                        label={index === 0 ? 'Section' : ''}
                        required={false}
                        key={field.key}
                      >
                        <Form.Item
                          {...field}
                          rules={[
                            {
                              required: true,
                              whitespace: true,
                              message: VALIDATE_MESSAGE.REQUIRED,
                            },
                          ]}
                          noStyle
                        >
                          <Input
                            placeholder="passenger name"
                            style={{
                              width: '60%',
                            }}
                            className="mr-1"
                          />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(field.name)} />
                      </Form.Item>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        style={{
                          width: '60%',
                        }}
                        icon={<PlusOutlined />}
                      >
                        Add field
                      </Button>
                      <Form.ErrorList errors={errors} />
                    </Form.Item>
                  </>
                )}
              </Form.List>
              <Form.Item wrapperCol={{ span: 24 }}>
                <Button type="primary" htmlType="submit" className="bg-black w-full">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default AddSection;
