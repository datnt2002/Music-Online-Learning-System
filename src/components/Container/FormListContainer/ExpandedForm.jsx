import React from 'react';
import { Button, Form, Input } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import { VALIDATE_MESSAGE } from '../../../constants';

const ExpandedForm = ({ title, nameFormList, placeholder }) => {
  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      span: 24,
      offset: 6,
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
    <div className="flex flex-1  p-5 m-5 shadow-xl border border-black rounded-2xl">
      <div className="flex flex-1 flex-col">
        <Form.List name={nameFormList}>
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ name, key }) => {
                return (
                  <Form.Item
                    {...(key === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    label={key === 0 ? title : ''}
                    required={false}
                    key={key}
                  >
                    <Form.Item
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
                    {fields.length > 1 ? (
                      <MinusCircleOutlined className="dynamic-delete-button" onClick={() => remove(name)} />
                    ) : null}
                  </Form.Item>
                );
              })}
              <Form.Item wrapperCol={{ span: 24 }}>
                <Button type="dashed" onClick={() => add()} className="w-full" icon={<PlusOutlined />}>
                  Add field
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </div>
    </div>
  );
};

export default ExpandedForm;
