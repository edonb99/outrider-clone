import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full px-6 py-8 text-white">
      <div className="flex flex-row items-center justify-between">
        <div className="relative -rotate-45 cursor-pointer w-9 h-9 top-1 left-2">
          <span className="absolute w-2 h-2 scale-100 bg-white rounded-full top-4 left-1 -translate-y-7 "></span>
          <span className="absolute top-0 left-0 origin-center bg-transparent border-8 border-white rounded-full h-9 w-9 "></span>
        </div>
        <div className="flex flex-row items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 cursor-pointer "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <circle cx="12" cy="12" r="10" stroke="orange" />
          </svg>
          <button className="relative mt-1 mr-2 text-base text-white bg-transparent border-0 outline-none cursor-pointer ">
            <span className="pl-1">
              Espa<span>&#241;</span>ol
            </span>
          </button>
          <button className="relative flex flex-row items-center h-10 pl-2 overflow-hidden bg-transparent border-0 outline-none ">
            <svg viewBox="0 0 100 80" width="20" height="20" fill="white">
              <rect width="100" height="5"></rect>
              <rect y="30" width="100" height="5"></rect>
              <rect y="60" width="100" height="5"></rect>
            </svg>
            <p className="pl-2 text-sm text-white uppercase">Menu</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
