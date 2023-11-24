import React from 'react';
import { Button, Form, Input } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import { VALIDATE_MESSAGE } from '../../../constants';

const ExpandedForm = ({ title, nameFormList, placeholder }) => {
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
    <div className="flex flex-1 p-5 m-5 shadow-xl rounded-2xl">
      <div className="flex flex-1 flex-col">
        <Form.List
          name={nameFormList}
          rules={[
            {
              validator: async (_, names) => {
                if (!names || names.length < 1) {
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
                  label={index === 0 ? title : ''}
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
                      placeholder={placeholder}
                      style={{
                        width: '90%',
                      }}
                      className="mr-1"
                    />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Form.Item>
              ))}
              <Form.Item wrapperCol={{ span: 24 }}>
                <Button type="dashed" onClick={() => add()} className="w-full" icon={<PlusOutlined />}>
                  Add field
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>
      </div>
    </div>
  );
};

export default ExpandedForm;
