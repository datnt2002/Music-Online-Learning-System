import React from 'react';

const CardCart = () => {
  return (
    <div class="rounded-lg">
      <div class="flex rounded-lg p-6 shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="courseImage"
          class="rounded-lg max-w-[10rem]"
        />
        <div className="flex flex-1 ml-5">
          <div class="flex flex-col flex-1">
            <h1 class="text-lg font-bold text-gray-900">Title</h1>
            <p class="mt-1 text-xs text-gray-700">Author</p>
          </div>

          <p class="text-sm">259.000</p>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
