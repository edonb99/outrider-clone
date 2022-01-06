import React from "react";

const TextSection = (props) => {
  const { title, body, className = "" } = props;

  return (
    <div className={`w-full md:w-full ${className} `}>
      <h3 className="h-12 font-serif text-2xl font-normal text-white md:text-4xl">
        {title}
      </h3>
      <hr className="mt-3 mb-4 border-white-500" />
      <p className="text-white md:text-2xl ">{body}</p>
    </div>
  );
};

export default TextSection;
