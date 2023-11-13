import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Form, Input, Space } from 'antd';
import { CREATE_LESSON_FORM_FIELDS, STORAGE } from '../../../constants';
import { useDispatch } from 'react-redux';
import { createNewQuestionInQuizAction } from '../../../redux/slice/courseSlice';

const CreateQuestionForm = () => {
  const dispatch = useDispatch();

  const handleSubmitQuestion = (values) => {
    console.log(values);
    const question = { quizId: sessionStorage.getItem(STORAGE.QUIZ_ID), questions: values.questions };
    console.log(question);
    dispatch(createNewQuestionInQuizAction({ question }));
  };

  const formLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 20,
    },
  };

  const initValueAnswer = { content: '', isCorrect: false };
  const initValueQuestion = { content: '' };
  return (
    <Form
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
                <Form.Item
                  label={CREATE_LESSON_FORM_FIELDS.QUESTION_LABEL}
                  name={[field.name, CREATE_LESSON_FORM_FIELDS.QUESTION_CONTENT_NAME]}
                >
                  <Input />
                </Form.Item>

                {/* Nest Form.List */}
                <Form.Item label={CREATE_LESSON_FORM_FIELDS.ANSWER_LABEL}>
                  <Form.List name={[field.name, CREATE_LESSON_FORM_FIELDS.ANSWER_ARRAY_NAME]}>
                    {(subFields, subOpt) => (
                      <div className="flex flex-col gap-4">
                        {subFields.map((subField) => (
                          <Space key={subField.key}>
                            <Form.Item noStyle name={[subField.name, CREATE_LESSON_FORM_FIELDS.ANSWER_CONTENT_NAME]}>
                              <Input placeholder={CREATE_LESSON_FORM_FIELDS.ANSWER_LABEL} />
                            </Form.Item>
                            <Form.Item
                              noStyle
                              valuePropName="checked"
                              name={[subField.name, CREATE_LESSON_FORM_FIELDS.CHECKBOX_CORRECT]}
                            >
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
                        <Button type="dashed" onClick={() => subOpt.add(initValueAnswer)} block>
                          + Add Answer
                        </Button>
                      </div>
                    )}
                  </Form.List>
                </Form.Item>
              </Card>
            ))}

            <Button type="dashed" onClick={() => add(initValueQuestion)} block>
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
