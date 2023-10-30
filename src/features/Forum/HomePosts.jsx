import React from 'react';

import ContactSideBar from '../../components/Container/ForumContainer/ContactsContainer/ContactSideBar';
import Feed from '../../components/Container/ForumContainer/Posts/Feed';

const HomePosts = () => {
  return (
    <div className="flex">
      {/* posts */}
      <Feed />
      <ContactSideBar />
    </div>
  );
};

export default HomePosts;
