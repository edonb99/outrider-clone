import React from "react";

const Section = () => {
  return (
    <div className=" min-h-[600px] min-w-full relative overflow-hidden flex justify-center ">
      <img
        className="absolute top-0 left-0 z-0 w-full h-full origin-center bg-center bg-no-repeat bg-cover opacity-75 hover:delay-100 hover:scale-150 hover:duration-150"
        src=" https://cms.outrider.org/sites/default/files/styles/wide_md/public/2019-04/GettyImages-1132714898.jpg?h=2992ba0a&itok=4q8ORk_W"
        alt=""
      ></img>
      <div className="absolute z-10 flex flex-col justify-center gap-5 mx-auto my-0 font-normal top-1/2 ">
        <h1 className="mx-auto my-0 text-white border-2 border-orange-500 ">
          Explore Our Nukes Story Archive
        </h1>
        <hr className="w-20 h-1 mx-auto my-0 " />
        <button className="py-4 mx-auto my-0 text-sm text-center text-orange-600 uppercase bg-white rounded-full cursor-pointer px-11 hover:text-white hover:bg-orange-600 hover:ease-in">
          Read more
        </button>
      </div>
    </div>
  );
};

export default Section;
