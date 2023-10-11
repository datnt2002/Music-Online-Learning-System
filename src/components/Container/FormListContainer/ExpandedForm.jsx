import React from 'react';
import { Button, Form, Input, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const ExpandedForm = ({ title, nameFormList, placeholder }) => {
  return (
    <div className="flex flex-1 flex-col p-5 m-5 shadow-xl border border-black rounded-2xl">
      <h1>{title}</h1>
      <Form.List name={nameFormList}>
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} align="flex-start">
                <Form.Item {...restField} name={[name, 'items']}>
                  <Input placeholder={placeholder} className="border border-black rounded-md" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" className="border border-black" onClick={() => add()} block icon={<PlusOutlined />}>
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
};

export default ExpandedForm;
