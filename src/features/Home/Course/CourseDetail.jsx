import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { Divider, Menu, Rate } from 'antd';
import {
  ClockCircleOutlined,
  CheckCircleOutlined,
  GlobalOutlined,
  CheckOutlined,
  CaretRightOutlined,
  HighlightOutlined,
  NotificationOutlined,
} from '@ant-design/icons';

import { getDetailCourseAction } from '../../../redux/slice/courseSlice';
import BreadcrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import CourseDetailFloatingPanel from '../../../components/Container/CourseContainer/CourseDetailFloatingPanel';
import repeatBg from '../../../assets/imgs/repeatbg.jpg';
import LecturerCard from '../../../components/Container/CardTemplate/LecturerCard';
import defaultCourse from '../../../assets/imgs/default-course.png';
import CourseHorizontalCard from '../../../components/Container/CardTemplate/CourseHorizontalCard';
import Footer from '../../../components/Common/Footer';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Navigation One', 'sub1', <></>, [
    getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),
  getItem('Navigation Two', 'sub2', <></>, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Navigation Three', 'sub4', <></>, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];
const CourseDetail = () => {
  const location = useLocation();
  const { pathname } = location;
  const pathNameArray = pathname.split('/').filter((item) => {
    return item;
  });
  const currentCourse = useSelector((state) => state.course.currentCourse);
  const listCourse = useSelector((state) => state.course.listCourse);
  console.log(listCourse);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getDetailCourseAction({
        courseId: pathNameArray[1],
      })
    );
  }, [dispatch]);

  const onClick = (e) => {
    console.log('click ', e);
  };
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
          {/* what you learn */}
          <div className="rounded-2xl border-2 shadow-md border-black py-4">
            <h2 className="text-xl mx-6 mb-2 font-medium"> What you learn in this course</h2>
            <ul className="flex flex-wrap justify-between mx-6">
              <li className="max-w-[18rem]">
                <CheckOutlined className="align-[0.125rem]" /> HỌC đi đôi với "THỰC HÀNH", xây dựng ĐAM MÊ về lập trình
                với REACT
              </li>
              <li className="max-w-[18rem]">
                <CheckOutlined className="align-[0.125rem]" /> HỌC đi đôi với "THỰC HÀNH", xây dựng ĐAM MÊ về lập trình
                với REACT
              </li>
              <li className="max-w-[18rem]">
                <CheckOutlined className="align-[0.125rem]" /> HỌC đi đôi với "THỰC HÀNH", xây dựng ĐAM MÊ về lập trình
                với REACT
              </li>
              <li className="max-w-[18rem]">
                <CheckOutlined className="align-[0.125rem]" /> HỌC đi đôi với "THỰC HÀNH", xây dựng ĐAM MÊ về lập trình
                với REACT
              </li>
            </ul>
          </div>

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
            </div>

            <Menu className=" bg-white/90 rounded-2xl mt-6" onClick={onClick} mode="inline" items={items} />
          </div>

          {/* requirement */}
          <div className="my-6">
            <h2 className="text-xl mb-4 font-medium">Requirements</h2>
            <ul>
              <li>
                <CheckCircleOutlined className="align-[0.125rem] mr-4" />
                Có tư duy lập trình
              </li>
              <li>
                <CheckCircleOutlined className="align-[0.125rem] mr-4" />
                Có tư duy lập trình
              </li>
              <li>
                <CheckCircleOutlined className="align-[0.125rem] mr-4" />
                Có tư duy lập trình
              </li>
            </ul>
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

          <div className="my-6">
            <h2 className="text-xl mb-4 font-medium">Subcribes</h2>

            <ul>
              <li>
                <CheckCircleOutlined className="align-[0.125rem] mr-4" />
                Tất cả những bạn mới bắt đầu, những bạn muốn học lập trình với React, đang muốn học và làm chủ React thì
                đây chính là khóa học các bạn tìm. React Ultimate, chỉ một là đủ.
              </li>
            </ul>
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
