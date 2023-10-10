import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { Divider, Rate } from 'antd';
import { ClockCircleOutlined, GlobalOutlined, HighlightOutlined, NotificationOutlined } from '@ant-design/icons';

import { getDetailCourseAction } from '../../../redux/slice/courseSlice';
import BreadcrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import CourseDetailFloatingPanel from '../../../components/Container/CourseContainer/CourseDetailFloatingPanel';
import repeatBg from '../../../assets/imgs/repeatbg.jpg';
import LecturerCard from '../../../components/Container/CardTemplate/LecturerCard';
import CourseHorizontalCard from '../../../components/Container/CardTemplate/CourseHorizontalCard';
import Footer from '../../../components/Common/Footer';
import WhatLearnDetail from '../../../components/Container/CourseContainer/WhatLearnDetail';
import CourseContent from '../../../components/Container/CourseContainer/CourseContent';
import RequirementContainer from '../../../components/Container/CourseContainer/RequirementContainer';

const CourseDetail = () => {
  const location = useLocation();
  const { pathname } = location;
  const pathNameArray = pathname.split('/').filter((item) => {
    return item;
  });
  const currentCourse = useSelector((state) => state.course.currentCourse);
  console.log(currentCourse);
  const listCourse = useSelector((state) => state.course.listCourse);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getDetailCourseAction({
        courseId: pathNameArray[1],
      })
    );
  }, []);

  return (
    <div style={{ backgroundImage: `url(${repeatBg})`, backgroundSize: '100% auto' }}>
      <Divider className="bg-black mt-8" />
      <div className=" text-black pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="ml-16 mb-4">
            <BreadcrumbCustom />
          </div>

          <div className="ml-16 max-w-2xl">
            <h1 className="text-3xl my-2 font-bohemian">{currentCourse.courseName}</h1>
            <h2 className="text-xl my-2">
              Master modern React from beginner to advanced! Context API, React Query, Redux Toolkit, Tailwind, advanced
              patterns
            </h2>
            <div className="flex my-2">
              <p className="bg-yellow-300 text-sm text-black py-1 px-2 mr-2">Best seller</p>
              <p className="align-middle mx-2 leading-1">4.5</p>
              <Rate disabled allowHalf defaultValue={2.5} className="leading-none mx-2" />
              <p className="align-middle mx-2 leading-1">
                <HighlightOutlined className="align-[0.125rem]" /> 224 Rating
              </p>
              <p className="align-middle mx-2 leading-1">
                <NotificationOutlined className="align-[0.125rem]" /> 448 Subscribes
              </p>
            </div>
            <p className="my-2">
              Created by <Link className="underline">Author Name</Link>
            </p>
            <div className="flex">
              <p className="mr-2">
                <ClockCircleOutlined className="align-[0.125rem]" /> Last update at {currentCourse.updatedAt}
              </p>

              <p className="ml-2">
                <GlobalOutlined className="align-[0.125rem]" /> Vietnamese
              </p>
            </div>
          </div>
        </div>
        <Divider className="bg-black mt-10 mb-0" />
      </div>

      <CourseDetailFloatingPanel data={currentCourse} />

      {/* What you learn */}
      <div className="mx-auto max-w-7xl">
        <div className="ml-16 max-w-2xl">
          <WhatLearnDetail />

          <CourseContent />

          <RequirementContainer />

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

          <div>
            <h2 className="text-xl mb-2 font-medium">Instructor</h2>
            <LecturerCard />
          </div>

          <div>
            <h2 className="text-xl mb-4 font-medium">Students also bought</h2>
            <div className="">
              {listCourse.map((course) => {
                return <CourseHorizontalCard courseData={course} />;
              })}
            </div>
          </div>

          {/* cmt and rating */}
          <div>
            <h2 className="text-xl mb-4 font-medium">Rating And Comments</h2>
            <div></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetail;
