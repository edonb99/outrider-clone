import React from "react";

const Footer = () => {
  return (
    <div className="my-16 ">
      <div className="flex flex-col items-center text-xl font-normal text-white ">
        <p className="mb-5 text-xs uppercase ">SIGN UP FOR OUTRIDER EMAILS</p>
        <h1 className="mb-5 text-4xl ">
          Get the Latest Articles from Outrider
        </h1>

        <div className="px-0 py-7">
          <input
            className="px-2 py-0 mb-2 mr-8 bg-transparent border-2 border-white h-14 w-96 "
            type="text"
            placeholder="Your email address"
          ></input>
          <button
            className="py-4 text-xs font-normal text-white uppercase bg-orange-600 border-none rounded-full cursor-pointer px-11 "
            type="submit"
          >
            Sign me up!
          </button>
        </div>

        <div className="flex flex-row gap-3">
          <a
            href="/"
            className="flex items-center justify-center w-10 h-10 text-black bg-white rounded-full hover:bg-black hover:text-white "
          >
            <svg
              class="h-5 w-5 "
              viewBox="0 0 24 24"
              fill="black"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
          </a>
          <a
            href="/"
            className="flex items-center justify-center w-10 h-10 text-black bg-white rounded-full hover:bg-black hover:text-white "
          >
            <svg
              class="h-5 w-5"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="transparent"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </a>
          <a
            href="/"
            className="flex items-center justify-center w-10 h-10 text-black bg-white rounded-full hover:bg-black hover:text-white "
          >
            <svg
              class="h-5 w-5 "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />{" "}
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{" "}
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            href="/"
            className="flex items-center justify-center w-10 h-10 text-black bg-white rounded-full hover:bg-black hover:text-white "
          >
            <svg
              class="h-5 w-5 "
              viewBox="0 0 24 24"
              fill="black"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
              <rect x="2" y="9" width="4" height="12" />{" "}
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
