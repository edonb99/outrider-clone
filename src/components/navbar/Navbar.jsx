import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="py-6">
        <div className="container flex items-center justify-between w-full px-8 mx-auto md:px-14 lg:px-24">
          <div className="relative w-9 h-9 top-1 left-2 ">
            <span className="absolute w-2 h-2 border-white rounded-full opacity-100 top-4"></span>
            <span className="absolute top-0 left-0 border-8 border-white rounded-full"></span>
          </div>

          <div className="container flex ">
            <div className="relative mt-1 text-sm bg-transparent border-0 border-white cursor-pointer ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
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
              </svg>
              <p>Espanol</p>
            </div>

            <div className="relative flex items-center h-10 overflow-hidden bg-transparent border-0 cursor-pointer ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <p>Menu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
