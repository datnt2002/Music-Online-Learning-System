import React from 'react';

import { Divider } from 'antd';

import ListContainer from '../../components/Container/ListCoursesContainer';
import SubNavCategory from '../../components/Container/SubnavContainer/SubNavCategory';
import ListFeatureCourses from '../../components/Container/ListCoursesContainer/ListFeatureCourses';
import PopularAuthor from '../../components/Container/HomepageContainer/PopularAuthor';
import AllCourses from '../../components/Container/HomepageContainer/AllCourses';
import introBg from '../../assets/imgs/intro-bg.jpg';
import repeatBg from '../../assets/imgs/repeatbg.jpg';
import Footer from '../../components/Common/Footer';

const Homepage = () => {
  return (
    <div>
      {/* sub nav */}
      <div style={{ backgroundImage: `url(${introBg})` }} className="bg-cover">
        <div className="h-auto my-4 mx-11 md:h-16 md:mb-0">
          <SubNavCategory />
        </div>
        <Divider className="mt-0 bg-black" />

        <div className="text-center mt-52 h-[27rem]">
          <h1 className="text-6xl mb-8 font-bohemian tracking-wide">Play to perfection</h1>
          <h1 className="text-6xl font-bohemian tracking-wide">Inspire to greatness</h1>
        </div>

        <Divider className=" bg-black mt-0" />
      </div>
      <div style={{ backgroundImage: `url(${repeatBg})`, backgroundSize: '100% auto' }} className=" bg-repeat-y">
        <div className="md:mx-32 mx-8 mt-14">
          <div className="my-16">
            <h1 className="text-2xl font-semibold mb-10 text-center">Courses to get you started</h1>
            <ListContainer />
          </div>

          {/* Feature courses */}
          <div className="my-16">
            <h1 className="text-2xl font-semibold mb-10 text-center">Feature courses</h1>
            <ListFeatureCourses />
          </div>

          {/* Popular authors */}
          {/* <div className="my-16">
            <h1 className="text-2xl font-semibold mb-10 text-center">Popular authors</h1>
            <PopularAuthor />
          </div> */}

          <div className="my-16">
            <h1 className="text-2xl font-semibold mb-10 text-center">All Music Courses</h1>
            {/* filter and sort */}
            <AllCourses />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
