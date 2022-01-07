import React from "react";

const Section = () => {
  return (
    <div className="min-h-[300px] min-w-full md:min-h-[600px] md:min-w-full relative overflow-hidden flex justify-center group ">
      <img
        className="absolute z-0 object-cover w-full h-full transition-all duration-1000 transform scale-100 group-hover:scale-125"
        src=" https://cms.outrider.org/sites/default/files/styles/wide_md/public/2019-04/GettyImages-1132714898.jpg?h=2992ba0a&itok=4q8ORk_W"
        alt=""
      ></img>
      <div className="absolute inset-0 transition-all duration-1000 bg-black/5 group-hover:bg-black/50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center my-0 font-normal">
        <h1 className="max-w-lg text-4xl text-white">
          Explore Our Nukes Story Archive
        </h1>
        <div className="flex items-center justify-center w-full h-1 my-6 transition-all group-hover:h-10">
          <div className="w-0 ease-in-out duration-1000 transition-all h-px bg-orange-500 group-hover:w-[100px]"></div>
        </div>
        <button className="py-3 mx-auto my-0 text-sm text-center text-black uppercase transition-all bg-white rounded-full cursor-pointer px-11 hover:text-white hover:bg-orange-600 hover:ease-in">
          Read more
        </button>
      </div>
    </div>
  );
};

export default Section;
