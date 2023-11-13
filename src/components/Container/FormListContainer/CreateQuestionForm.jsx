import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Form, Input, Space } from 'antd';

const CreateQuestionForm = () => {
  const [form] = Form.useForm();

  const handleSubmitQuestion = (values) => {
    console.log(values);
  };

  const formLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 20,
    },
  };
  return (
    <Form
      form={form}
      {...formLayout}
      autoComplete="off"
      onFinish={handleSubmitQuestion}
      initialValues={{
        items: [{}],
      }}
    >
      <Form.List name="questions">
        {(fields, { add, remove }) => (
          <div className="flex flex-col gap-4">
            {fields.map((field) => (
              <Card
                size="small"
                title={`Question ${field.name + 1}`}
                key={field.key}
                extra={
                  <CloseOutlined
                    onClick={() => {
                      remove(field.name);
                    }}
                  />
                }
              >
                <Form.Item label="Question" name={[field.name, 'content']}>
                  <Input />
                </Form.Item>

                {/* Nest Form.List */}
                <Form.Item label="Answer">
                  <Form.List name={[field.name, 'answer']}>
                    {(subFields, subOpt) => (
                      <div className="flex flex-col gap-4">
                        {subFields.map((subField) => (
                          <Space key={subField.key}>
                            <Form.Item noStyle name={[subField.name, 'content']}>
                              <Input placeholder="answer" />
                            </Form.Item>
                            <Form.Item noStyle valuePropName="checked" name={[subField.name, 'isCorrect']}>
                              <Checkbox defaultChecked={false}>Correct Answer</Checkbox>
                            </Form.Item>
                            <CloseOutlined
                              className="align-[0.125rem]"
                              onClick={() => {
                                subOpt.remove(subField.name);
                              }}
                            />
                          </Space>
                        ))}
                        <Button type="dashed" onClick={() => subOpt.add({ content: '', isCorrect: false })} block>
                          + Add Answer
                        </Button>
                      </div>
                    )}
                  </Form.List>
                </Form.Item>
              </Card>
            ))}

            <Button type="dashed" onClick={() => add({ content: '' })} block>
              + Add Question
            </Button>
          </div>
        )}
      </Form.List>

      <Form.Item
        wrapperCol={{
          span: 24,
        }}
      >
        <Button type="primary" htmlType="submit" className="bg-black w-full mt-4">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateQuestionForm;
