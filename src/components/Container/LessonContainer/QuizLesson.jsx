import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Button, Form, Radio, Space } from 'antd';
import dayjs from 'dayjs';

import splitSlash from '../../../utils/splitSlash';
import { getDetailQuizAction } from '../../../redux/slice/courseSlice';
import Loading from '../../Common/Loading';
import { DAY_FORMAT } from '../../../constants';

const QuizLesson = () => {
  const currentQuiz = useSelector((state) => state.course.currentQuiz);
  const loading = useSelector((state) => state.course.loading);
  const location = useLocation();
  const { pathname } = location;
  const pathNameArray = splitSlash(pathname);
  const dispatch = useDispatch();
  console.log(currentQuiz);

  let questions = [];
  if (currentQuiz?.Questions) {
    questions = currentQuiz?.Questions;
    console.log(questions);
  }

  useEffect(() => {
    console.log('re-render');
    dispatch(
      getDetailQuizAction({
        quizId: pathNameArray[2],
      })
    );
  }, [pathNameArray[2]]);

  const handleSubmitQuestion = (values) => {
    console.log(values);
  };

  return (
    <>
      {loading && <Loading />}
      <div className="mx-auto md:mt-6">
        <h1 className="text-4xl font-bold font-bohemian">{currentQuiz?.title}</h1>
        <p className="text-sm my-3 text-gray-500">
          Updated At {dayjs(questions[0]?.createdAt).format(DAY_FORMAT.D_M_Y)}
        </p>
        <Form onFinish={handleSubmitQuestion} layout="vertical">
          {questions.map((question) => {
            return (
              <div key={question?.questionId}>
                <h1 className="text-2xl mb-2">{question?.content}</h1>
                <h1 className="my-2">Choose the correct answer:</h1>
                <Form.Item name="test">
                  <Radio.Group>
                    <Space direction="vertical">
                      {question?.Answers.map((answer) => {
                        return (
                          <Radio
                            key={answer?.answerId}
                            className="max-w-xl whitespace-normal break-all"
                            value={answer?.isCorrect}
                          >
                            {answer?.content}
                          </Radio>
                        );
                      })}
                    </Space>
                  </Radio.Group>
                </Form.Item>
              </div>
            );
          })}
          <Form.Item className="flex justify-end">
            <Button className="bg-black" type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default QuizLesson;
