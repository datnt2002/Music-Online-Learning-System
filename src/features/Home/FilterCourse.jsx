import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Divider, Menu, Pagination } from 'antd';
import CourseHorizontalCard from '../../components/Container/CardTemplate/CourseHorizontalCard';
import repeatBg from '../../assets/imgs/repeatbg.jpg';
import SubNavCategory from '../../components/Container/SubnavContainer/SubNavCategory';
import Footer from '../../components/Common/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import splitSlash from '../../utils/splitSlash';
import { getListCourseFilterByCateAction, getListCourseFilterBySubCateAction } from '../../redux/slice/courseSlice';
import { PAGINATION, PUBLIC_ROUTE } from '../../constants';

const FilterCourse = () => {
  const listCategories = useSelector((state) => state.course.listCategory);
  const filterCourse = useSelector((state) => state.course.filterCourse);
  const listSubCate = useSelector((state) => state.course.listSubcategories);
  const pagination = useSelector((state) => state.course.pagination);

  const location = useLocation();
  const { pathname } = location;
  const pathNameArray = splitSlash(pathname);
  console.log(filterCourse);
  const [pageIndex, setPageIndex] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleFilterBySubCate = ({ key }) => {
    console.log('click ', key);
    navigate(PUBLIC_ROUTE.FILTER_SUB_CATE + `/${key}`);
    dispatch(
      getListCourseFilterBySubCateAction({
        subCateId: pathNameArray[1],
        pageIndex: pageIndex,
        pageSize: PAGINATION.PAGE_SIZE,
        navigate,
      })
    );
  };

  const items = listCategories.map((cate) => {
    return {
      key: cate.cateId,
      label: cate.cateName,
      children: listSubCate
        .filter((subCate) => {
          return subCate.cateId === cate.cateId;
        })
        .map((subCate) => {
          return {
            key: subCate.subCateId,
            label: subCate.subCateName,
          };
        }),
    };
  });

  useEffect(() => {
    if (pathNameArray[0] === 'category') {
      dispatch(
        getListCourseFilterByCateAction({
          cateId: pathNameArray[1],
          pageIndex: pageIndex,
          pageSize: PAGINATION.PAGE_SIZE,
          navigate,
        })
      );
    } else {
      dispatch(
        getListCourseFilterBySubCateAction({
          subCateId: pathNameArray[1],
          pageIndex: pageIndex,
          pageSize: PAGINATION.PAGE_SIZE,
        })
      );
    }
  }, [pathNameArray[1]]);
  return (
    <>
      <div
        style={{ backgroundImage: `url(${repeatBg})`, backgroundSize: '100% auto' }}
        className="min-h-screen bg-repeat-y"
      >
        <div className="h-auto my-4 mx-11 md:h-16 md:mb-0">
          <SubNavCategory />
        </div>
        <Divider className="mt-0 bg-black" />
        <div className="md:mx-32 mx-8 mt-14 -mb-[3.7rem]">
          <div className="my-16">
            <h1 className="text-2xl font-semibold mb-10 text-center">All Courses</h1>
            {/* filter and sort */}
            <div>
              <div className="flex py-4 pr-4 my-4">
                <p className="flex flex-1 justify-end items-center">{pagination?.totalCount} courses</p>
              </div>

              <div className="flex flex-col lg:flex lg:flex-row">
                <div className="flex flex-col basis-1/4 mb-2 lg:mr-4 lg:mb-0">
                  <Menu
                    onClick={handleFilterBySubCate}
                    mode="inline"
                    items={items}
                    className="rounded-2xl bg-white/50"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3">
                  {filterCourse.map((course, index) => {
                    return index < 5 ? <CourseHorizontalCard courseData={course} /> : <></>;
                  })}

                  <Pagination
                    defaultCurrent={1}
                    current={pageIndex}
                    pageSize={5}
                    total={pagination?.totalCount}
                    className="text-center pb-2"
                    onChange={(page) => {
                      setPageIndex(page);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FilterCourse;
