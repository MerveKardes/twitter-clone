import React from "react";

const UserBox = () => {
  return (
    <div className="flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200">
      <img
        src="https://ichef.bbci.co.uk/news/640/cpsprodpb/16FA9/production/_92712149_gettyimages-480164327.jpg"
        alt="Profile"
        className="w-11 h-11 rounded-full"
      />
      <div className="flex flex-col mr-4">
        <span className="text-black text-md font-bold">Merve Kardeş</span>
        <span className="text-">@mmervekardess</span>
      </div>
      <div className="flex space-x-1">
        <div className="w-1 h-1 bg-gray-900 rounded-full" />
        <div className="w-1 h-1 bg-gray-900 rounded-full" />
        <div className="w-1 h-1 bg-gray-900 rounded-full" />
      </div>
    </div>
  );
};

export default UserBox;
