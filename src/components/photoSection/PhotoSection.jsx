import React from "react";

const PhotoSection = (props) => {
  const { title, textType, logo, className = "" } = props;

  return (
    <div className={`relative w-full z-0 group ${className} `}>
      <a href="/#" target="">
        <div className="relative w-full filter brightness-50 pb-28 h-[400px]">
          <img
            className="absolute top-0 left-0 object-cover w-full h-full"
            src={logo}
            alt=""
          ></img>
        </div>
        <div className="absolute w-1/2 font-normal cursor-pointer bottom-7 left-7 ">
          <p className="font-bold text-orange-600 uppercase md:text-sm ">
            {textType}
          </p>
          <h1 className="text-white md:text-4xl group-hover:text-gray-300">
            {title}
          </h1>
        </div>
        <div className="absolute bottom-7 right-7">
          <span class="group-hover:animate-ping transition-all duration-300 absolute inline-flex h-full w-full rounded-full group-hover:bg-orange-600 opacity-75"></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-white bg-transparent group-hover:bg-orange-500 group-hover:rounded-full group-hover:stroke-white"
            fill="transparent"
            viewBox="0 0 24 24"
            stroke="#ea5600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </a>
    </div>
  );
};

export default PhotoSection;
