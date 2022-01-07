import React from "react";

const Footer2 = () => {
  return (
    <div className="px-20 py-16 bg-black">
      <div className="flex flex-col-reverse justify-between bg-black md:flex-row">
        <div className="items-center pb-5 text-xl font-normal text-center text-white border-t-2 border-white md:border-t-0 pt-7 md:border-r-2 md:flex md:flex-col md:items-start md:w-1/2 ">
          <h1 className="mb-5 text-4xl font-normal ">Outrider Foundation</h1>
          <h3 className="mb-5 text-base text-center md:text-left">
            834 E. Washington Ave., Suite 333 Madison, WI 53703
          </h3>
          <p className="w-11/12 mb-6 text-sm font-normal text-center md:text-left ">
            Among the greatest threats to the future of humankind are nuclear
            weapons and global climate change. Outrider makes the bold claim
            that both threats can be overcome — and not just by policy makers
            but by people with the right tools and inspiration.
          </p>
          <div className="flex flex-row gap-12 text-sm text-center ">
            <a
              href="/#"
              className="relative px-3 py-2 transition-all duration-300 ease-in-out group"
            >
              <div className="absolute bottom-0 left-0 w-full h-0 transition-all bg-orange-600 group-hover:h-full"></div>
              <span className="relative z-10">About Us</span>
            </a>

            <a
              href="/#"
              className="relative px-3 py-2 transition-all duration-300 ease-in-out group"
            >
              <div className="absolute top-0 left-0 w-full h-0 transition-all bg-orange-600 group-hover:h-full "></div>
              <span className="relative z-10">Contact Us</span>
            </a>
            <a
              href="/#"
              className="relative px-3 py-2 transition-all duration-300 ease-out group "
            >
              <div className="absolute bottom-0 left-0 w-full h-0 transition-all bg-orange-600 group-hover:h-full"></div>
              <span className="relative z-10">608.237.3489</span>
            </a>
          </div>
          <div className="flex flex-row justify-center mt-4 md:justify-start gab-3 ">
            <a
              href="/"
              className="flex items-center justify-center w-10 h-10 bg-transparent rounded-full hover:bg-orange-600"
            >
              <svg
                class="h-4 w-4"
                viewBox="0 0 24 24"
                fill="white"
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
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-orange-600"
            >
              <svg
                class="h-4 w-4"
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
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-orange-600 "
            >
              <svg
                class="h-4 w-4 "
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
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-orange-600 "
            >
              <svg
                class="h-4 w-4 "
                viewBox="0 0 24 24"
                fill="white"
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

        <div className="flex flex-col items-center md:items-start">
          <div className="mb-4 bg-no-repeat bg-contain ">
            <img
              className="h-8 "
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1OTIgMTAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1OTIgMTAxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxnPgoJPGcgaWQ9Ik91dHJpZGVyXzEzXyI+CgkJPGc+CgkJCTxnPgoJCQkJPGc+CgkJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyLjUsMzAuOWMwLDIuNS0yLDQuNS00LjUsNC41Yy0yLjUsMC00LjUtMi00LjUtNC41YzAtMi41LDItNC41LDQuNS00LjVDMTAuNSwyNi40LDEyLjUsMjguNCwxMi41LDMwLjkiCgkJCQkJCS8+CgkJCQk8L2c+CgkJCTwvZz4KCQk8L2c+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTMyLjksMzkuNGM2LjksMCwxMi40LDUuNiwxMi40LDEyLjRzLTUuNiwxMi40LTEyLjQsMTIuNGMtNi45LDAtMTIuNC01LjYtMTIuNC0xMi40UzI2LDM5LjQsMzIuOSwzOS40CgkJCSBNMzIuOSwzMS4yYy0xMS40LDAtMjAuNyw5LjMtMjAuNywyMC43czkuMywyMC43LDIwLjcsMjAuN3MyMC43LTkuMywyMC43LTIwLjdTNDQuMywzMS4yLDMyLjksMzEuMkwzMi45LDMxLjJ6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTcxLjQsNTQuM1YzMS4yaDguOXYyMi45YzAsNi42LDMuMywxMCw4LjcsMTBzOC43LTMuMyw4LjctOS43VjMxLjJoOC45VjU0YzAsMTIuMi02LjksMTguMi0xNy43LDE4LjIKCQkJUzcxLjQsNjYuMiw3MS40LDU0LjN6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTEzOC42LDM5LjRoLTEyLjN2LTguMmgzMy41djguMmgtMTIuM3YzMi4yaC04LjlWMzkuNHoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTgwLjYsMzEuMmgxOC41YzUuMSwwLDkuMSwxLjQsMTEuOCw0LjFjMi4zLDIuMywzLjUsNS40LDMuNSw5LjJ2MC4xYzAsNi41LTMuNSwxMC42LTguNywxMi41bDkuOSwxNC40CgkJCWgtMTAuNGwtOC43LTEyLjloLTAuMWgtNi45djEyLjloLTguOVYzMS4yeiBNMTk4LjUsNTAuOGM0LjMsMCw2LjgtMi4zLDYuOC01LjdWNDVjMC0zLjgtMi43LTUuOC03LTUuOGgtOC44djExLjZIMTk4LjV6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTIzNi42LDMxLjJoOC45djQwLjRoLTguOVYzMS4yeiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNjkuOSwzMS4yaDE1LjhjMTIuNywwLDIxLjUsOC43LDIxLjUsMjAuMXYwLjFjMCwxMS40LTguOCwyMC4yLTIxLjUsMjAuMmgtMTUuOFYzMS4yeiBNMjg1LjYsNjMuNgoJCQljNy4zLDAsMTIuMi00LjksMTIuMi0xMi4xdi0wLjFjMC03LjItNC45LTEyLjItMTIuMi0xMi4yaC02Ljl2MjQuNEgyODUuNnoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzI2LjksMzEuMmgzMC41djcuOWgtMjEuN3Y4LjJoMTkuMXY3LjloLTE5LjF2OC41aDIxLjl2Ny45aC0zMC44VjMxLjJ6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM4MC41LDMxLjJIMzk5YzUuMSwwLDkuMSwxLjQsMTEuOCw0LjFjMi4zLDIuMywzLjUsNS40LDMuNSw5LjJ2MC4xYzAsNi41LTMuNSwxMC42LTguNywxMi41bDkuOSwxNC40SDQwNQoJCQlsLTguNy0xMi45aC0wLjFoLTYuOXYxMi45aC04LjlWMzEuMnogTTM5OC40LDUwLjhjNC4zLDAsNi44LTIuMyw2LjgtNS43VjQ1YzAtMy44LTIuNy01LjgtNy01LjhoLTguOHYxMS42SDM5OC40eiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ5NS4xLDY0Yy01LjMsMy4xLTExLDcuNS0xNi4zLDEyYy0zLjEtMS44LTcuOC0zLjMtMTEuNC00LjF2MTQuNmMwLDIuMiwwLjQsNC42LDAuOCw1Ljh2MC4ybC0yLTAuMwoJCQljLTAuMy0xLjEtMC41LTMuMy0wLjUtNVY3MS41Yy0xLjMtMC4yLTIuNC0wLjQtMy44LTAuNHYxNGMwLDEuOSwwLjIsNC41LDAuNSw2LjVsLTAuMywwLjFjLTEuNC0xLjMtMy41LTQuMS00LjEtNi4zaC0wLjMKCQkJYy0xLjgsMy40LTQuOSw2LjQtNy44LDcuOGwtMC4zLTAuMWMxLjItMi4zLDEuOC01LjksMS44LTkuNFY3MC40SDQ0N2MtNC4yLDAtNi43LDEuNi03LjcsNGwtMC45LTAuNGMwLjUtNy43LDQuNi0xMy42LDExLjItMTMuNgoJCQloMi4xVjQ3aC0xLjhjLTQuMiwwLTYuNywxLjYtNy43LDQuMWwtMC45LTAuNGMwLjctNy4xLDMuNi0xMy4yLDEwLjItMTMuMmgwLjNWMjIuNmMtNy41LTUuMS05LTUuOC0xMC4zLTUuOGMtMS40LDAtMi40LDAuOS0zLjcsMgoJCQlsLTEuMS0xLjNsMTEuMi05LjVjMy41LDIuNCw3LjcsNS41LDE0LjUsMTAuNWwzLjUtMi4zVjE0YzAtMi4yLTAuNS00LjYtMC44LTUuOFY4LjFsMiwwLjNjMC4zLDEuMSwwLjUsMy4zLDAuNSw1VjE1bDEwLjUtNy4yCgkJCWMxMy40LDIuNSwxNy4yLDExLjUsMTcuMiwyMS45VjY0eiBNNDY1LjgsMTguMWwtMy44LDIuNVY2MWMxLjQsMCwyLjQsMC4xLDMuOCwwLjNWMTguMXogTTQ4NC43LDMzdi0yLjljMC05LjktNi0xMy40LTE0LjMtMTUuMQoJCQlsLTMsMi4xdjI0TDQ4NC43LDMzeiBNNDg0LjcsNDEuNHYtNi42bC0xNy4zLDh2Ni43TDQ4NC43LDQxLjR6IE00ODQuNyw2Ny4ydi0yNGwtMTcuMyw4djEwLjNjNS44LDAuNywxMi45LDMuMiwxNy4xLDUuOAoJCQlMNDg0LjcsNjcuMnoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTMxLjgsMjkuOWMtMC44LDAuNi0xLjUsMS40LTEuNSw0LjF2MzEuM2MtNC4xLDIuMy0xMC42LDYuNC0xNS41LDEwYy00LTIuNy04LjUtNS42LTEyLjMtNy43di0wLjQKCQkJYzEuMS0wLjUsMS41LTEuNiwxLjUtMy41VjMyLjFjNC42LTIuNiwxMC44LTYuNiwxNS41LTEwYzMuOCwyLjQsOC41LDUuNCwxMi4zLDcuNVYyOS45eiBNNTIxLDY4LjhWMzMuMmMtMi4xLTEuNC01LjEtMy4zLTcuNS00LjcKCQkJbC0wLjMsMC4xdjM1LjZjMiwxLjQsNS41LDMuNiw3LjYsNC44TDUyMSw2OC44eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01NjMuNyw0OC40Yy0xLDAuNy0xLjUsMS42LTEuNSwzLjR2MTUuNmMtNC44LDEuOC05LjksNC42LTE0LjgsNy45Yy0yLjUtMS44LTUuOS0zLjctOS4xLTQuNAoJCQljLTAuMiwwLjUtMC40LDEuNS0wLjQsMi44YzAsMC41LDAsMS40LDAsMS40Yy0wLjgtMC4zLTIuMy0wLjctMi4zLTAuN2MwLjMtMTAuNyw2LjktMTkuMSwxMC4zLTIzLjJjLTIuNi0xLjQtNy44LTQuNy05LjUtNS40CgkJCXYtMC40YzEtMC41LDEuNS0xLjQsMS41LTMuMlYyOWM0LjYtMS4zLDkuNy00LDEzLjUtNi44YzIuOSwyLjIsNS45LDQuNyw5LjIsNi43YzAuNS0xLjMsMC41LTIuNSwwLjgtNGMwLjUsMC40LDEuNiwwLjksMiwxLjMKCQkJYy0wLjUsMy44LTIuNyw5LjItOC43LDE2LjlsOSw0LjlWNDguNHogTTU1Myw2OC45VjUxLjFsLTIuOC0xLjRjLTIuNywzLTguMiwxMC4zLTkuOSwxNC4zYzQuOCwwLjMsOS42LDIuOCwxMi41LDVMNTUzLDY4Ljl6CgkJCSBNNTQ3LjYsMjguMWwtMC40LDAuMnYxNC4zYzAuOCwwLjUsMi40LDEuMywzLjMsMS43YzIuMi0yLjIsNS4xLTYuNCw2LjUtOS4xQzU1My4zLDMzLjQsNTQ5LjQsMjkuOSw1NDcuNiwyOC4xeiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01ODguNSw2Ni41bC04LjcsOC44Yy0zLjUtMi4yLTguNy01LjMtMTIuMS02LjlWNjhjMS4yLTAuNywxLjUtMi4yLDEuNS00LjN2LTMxaC0zLjh2LTAuNQoJCQljNC45LTMuMSw5LjgtMTEuNiwxMi4zLTE4LjNoMC42djEzLjZoOS4zbC0yLjMsNS4yaC02Ljl2MzEuN2M0LjMsMi44LDQuNywyLjYsNi4xLDIuNmMwLjcsMCwxLjUtMC40LDEuOS0wLjlsMC43LTAuOEw1ODguNSw2Ni41egoJCQkiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K"
              alt=""
            ></img>
          </div>
          <h1 className="mb-0 text-4xl font-normal text-center text-white md:text-left ">
            Get the Latest Articles from Outrider
          </h1>

          <div className="px-0 pt-5 pb-5">
            <input
              className="h-12 px-2 py-0 mb-2 mr-8 text-white bg-transparent border-2 border-white w-72 md:h-14 md:w-96 "
              type="text"
              placeholder="Your email address"
            ></input>
          </div>
          <button
            className="w-1/2 px-3 py-2 mb-4 text-xs font-bold text-center text-white uppercase bg-orange-600 border-none rounded-full cursor-pointer md:px-5 md:py-4 md:w-1/3 "
            type="submit"
          >
            Sign me up!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
