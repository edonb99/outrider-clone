import React from "react";
import headerData from "../../data/headerData";
import PhotoSection from "../photoSection/PhotoSection";
import TextSection from "../textSection/TextSection";

const mapping = {
  photoSection: PhotoSection,
  textSection: TextSection,
};

const Header = (props) => {
  return (
    <div className="relative flex flex-col min-h-screen mb-0">
      <div className="h-[100vh] absolute -top-44 left-0 overflow-hidden">
        <img
          src="https://cms.outrider.org/sites/default/files/styles/hero_lg/public/2018-01/04_ARC_CL_BQ_USAF_140922-F-QP609-123_cruise.jpg?itok=GdLZyd1e"
          className="object-cover w-full opacity-70"
          alt=""
        />
        <div className="absolute inset-0 z-10 w-full h-full bg-gradient-to-b from-transparent to-baseBg"></div>
      </div>
      <div className="relative z-20 flex flex-col px-20 pt-48">
        <div className="md:w-1/2 ">
          <h3 className="mb-3 text-xs text-white uppercase ">Challenge</h3>
          <h1 className="text-3xl font-bold text-white md:text-6xl">
            Nuclear Weapons
          </h1>
          <p className="py-2 text-white md:text-2xl ">
            The threat of nuclear confrontation is growing. But even unused,
            nuclear weapons have a destructive impact. What will it take for
            world leaders to abandon nuclear arms? And how can you help?
          </p>
          <div className="flex items-center ">
            <span className="py-2 pr-5 text-xl text-white uppercase md:text-2xl ">
              Explore
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 text-white bg-transparent cursor-pointer hover:animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:grid md:grid-cols-3 ">
          {headerData.map((data, index) => {
            const ComponentType = mapping[data.component];
            return (
              <ComponentType
                title={data.title}
                body={data.body}
                textType={data.textType}
                logo={data.logo}
                className={`
                ${index === 0 && "col-span-2"}
                ${index === 2 && "col-span-3"} 
            `}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
