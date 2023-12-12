import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'antd';
import { YoutubeOutlined, MobileOutlined, RollbackOutlined } from '@ant-design/icons';

import defaultCourse from '../../../assets/imgs/default-course.png';
import formatPrice from '../../../utils/formatPrice';
import { buyCourseByECoinAction } from '../../../redux/slice/courseSlice';
import { addToCartAction } from '../../../redux/slice/authenticationSlice';
import { useNavigate } from 'react-router-dom';
import { USER_ROUTE } from '../../../constants';

const CourseDetailFloatingPanel = ({ isBought }) => {
  const currentCourse = useSelector((state) => state.course.currentCourse);
  const cart = useSelector((state) => state.authentication.cart);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleBuyCourse = () => {
    dispatch(
      buyCourseByECoinAction({
        courseIdArray: [{ courseId: currentCourse?.course?.courseId }],
      })
    );
    setIsModalOpen(false);
  };

  const handleAddToCart = () => {
    dispatch(
      addToCartAction({
        courseId: currentCourse?.course?.courseId,
        carId: cart?.carId,
      })
    );
  };

  const handleStartLearning = () => {
    navigate(USER_ROUTE.LESSON_DETAIL);
  };
  return (
    <>
      <div className="lg:bg-white border-black border w-5/6 rounded-3xl z-50 mx-auto mb-6 shadow-2xl lg:fixed top-24 right-2/100  lg:top-32 lg:right-28 lg:w-96">
        <img
          className="aspect-video rounded-2xl mx-auto -mt-6 shadow-xl w-11/12 border border-black"
          src={currentCourse?.course?.courseImg || defaultCourse}
          alt="courseImage"
        />

        <div className="flex flex-col p-4 lg:p-8">
          <div className="flex flex-col flex-1">
            <h1 className="text-lg lg:text-2xl font-medium">
              ${currentCourse?.course?.price && formatPrice(currentCourse?.course?.price)}
            </h1>

            {isBought ? (
              <>
                <Button className="border border-black my-1" size="middle" onClick={handleStartLearning}>
                  Start Learning
                </Button>
              </>
            ) : (
              <>
                <Button className="border border-black my-1" size="middle" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
                <Button className="border border-black my-1" size="middle" onClick={showModal}>
                  Buy Now
                </Button>
              </>
            )}
          </div>
          <p className="font-medium text-lg lg:text-xl my-2">This course includes:</p>
          <p>
            <YoutubeOutlined className="align-[0.125rem] mr-4" />
            9.5 hours on-demand video
          </p>
          <p>
            <MobileOutlined className="align-[0.125rem] mr-4" />
            Access on mobile and TV
          </p>
          <p>
            <RollbackOutlined className="align-[0.125rem] mr-4" />
            Full lifetime access
          </p>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          title="Are you sure to buy this course?"
          open={isModalOpen}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Return
            </Button>,
            <Button
              className="bg-black"
              key="submit"
              type="primary"
              onClick={() => {
                handleBuyCourse();
              }}
            >
              Buy
            </Button>,
          ]}
        ></Modal>
      )}
    </>
  );
};

export default CourseDetailFloatingPanel;
