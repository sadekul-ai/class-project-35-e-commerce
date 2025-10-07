import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#FF9900] text-white font-sans text-center">
      <h1 className="text-[6rem] font-bold leading-none">404</h1>
      <Link
        to="/"
        className="bg-white text-[#FF9900] px-6 py-3 rounded-full font-medium shadow-md hover:bg-gray-100 transition"
      >
        হোমে ফেরত যান
      </Link>
    </div>
  );
};

export default NotFound;
