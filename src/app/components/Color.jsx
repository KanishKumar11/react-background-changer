import React from "react";

const Color = ({ name }) => {
  return (
    <div className={`bg-${name}-500 p-4 rounded-md text-white cursor-pointer`}>
      <span>{name}</span>
      <span className="bg-red-500 bg-blue-500 bg-yellow-500 bg-pink-500 bg-purple-500 bg-orange-500"></span>
    </div>
  );
};

export default Color;
