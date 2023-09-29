import React from 'react';
import { Link } from 'react-router-dom';

import { ClockCircleOutlined, GlobalOutlined, CaretRightOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

import courseImg from '../../../assets/imgs/adminAvatar.png';
import { DAY_FORMAT } from '../../../constants';

const ModalCourseDetail = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="flex bg-amber-400 rounded-3xl shadow-lg text-white py-14 mx-auto h-72">
        <div className="ml-16 flex flex-1 flex-col">
          <h1 className="mr-2">Course ID: {data.courseId}</h1>
          <h1 className="mr-2">Price: {data.price}</h1>
          <h2 className="text-xl my-2">{data.courseName}</h2>

          <p className="my-2">
            Created by <Link className="underline">{data.createdBy}</Link>
          </p>
          <div className="flex">
            <p className="mr-2">
              <ClockCircleOutlined className="align-[0.125rem]" /> Last update at{' '}
              {dayjs(data.createdAt).format(DAY_FORMAT.D_M_Y)}
            </p>

            <p className="ml-2">
              <GlobalOutlined className="align-[0.125rem]" />
              Vietnamese
            </p>
          </div>
        </div>
        <div className="flex flex-1 mr-16">
          <img src={courseImg} alt="" className="" />
        </div>
      </div>
      <div className="mx-auto">
        <div className="ml-10">
          {/* course content */}
          <div className="my-6">
            <h2 className="text-xl mb-4 font-medium">Course Content</h2>
            <div className="flex justify-between">
              <div className="flex">
                <p>31 sections</p>
                <p>
                  <CaretRightOutlined className="align-[0.125rem]" /> 411 lectures
                </p>
                <p>
                  <CaretRightOutlined className="align-[0.125rem]" /> 67h 10m total length
                </p>
              </div>
              <button>Expand All Lessons</button>
            </div>
            <div>List course dropdown</div>
          </div>

          {/* description */}
          <div className="my-6">
            <h2 className="text-xl mb-4 font-medium">Description</h2>
            <p>
              React.JS là một thư viện, framework giúp xây dựng một website hiện đại, có tính mở rộng và hiệu năng cực
              lớn. Các sản phẩm tiêu biểu sử dụng React có thể kể đến như Facebook và Instagram. Được Facebook chống
              lưng, cũng như đầu tư mạnh mẽ, cộng với một cộng đồng đông đảo sử dụng, React chính là thư viện Frontend
              phổ biến nhất hiện nay, bỏ xa Vue và Angular. Với tên gọi React ULTIMATE - mục tiêu đề ra của khóa học,
              đấy chính là nó là phiên bản cuối cùng, là thứ DUY NHẤT các bạn cần, cũng như cập nhật MỚI NHẤT & ĐẦY ĐỦ
              NHẤT cho người mới bắt đầu, muốn có một góc nhìn "thực sự chính xác" về React.JS. Ngoài ra, khi kết thúc
              khóa học, các bạn mới bắt đầu sẽ có đủ tự tin để làm chủ React, cũng như hiểu được, nắm vững được những
              kiến thức cốt lõi nhất để có thể xây dựng, phát triển một website thực tế với React.JS Khóa học sẽ thực sự
              bổ ích cũng như mang lại rất nhiều kiến thức cho các bạn mới bắt đầu. Với phương châm, học đi đôi với thực
              hành, chúng ta chỉ học "vừa đủ", chỉ học những kiến thức code lỗi nhất, hi vọng các bạn sẽ học hỏi được
              nhiều kiến thức, cũng như tự tin sử dụng React cho công việc của mình.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCourseDetail;
