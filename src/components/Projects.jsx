import React from "react";
import Netflix from "../assets/netflix.png";
import Proshop from "../assets/proshopstore.png";
import LinkedInClone from "../assets/linkedin-clone.png";
import Spotify from "../assets/spotify-clone.png";
import Restaurant from "../assets/restaurant.png";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full h-full md:h-screen text-black bg-white"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-black border-cyan-400">
            Projects
          </p>
          <p className="py-6 text-lg">Check out some of my recent projects</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Restaurant})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md  flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider p-2">
                Restaurant Website
              </span>

              <div className="pt-8 text-center">
                <a
                  href="https://restaurant-showcase.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-cyan-400 text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/pcha07/restaurant-showcase"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-cyan-400 text-black font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Proshop})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md  flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider p-2">
                Ecommerce Application
              </span>
              <p className="p-2">
                Login as admin - email:admin@example.com - password:123456
              </p>

              <div className="pt-8 text-center">
                <a href="https://proshop1404.herokuapp.com" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-cyan-400 text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/pcha07/proshopecommerceapp"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-cyan-400 text-black font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${LinkedInClone})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider ">
                Linkedin Clone
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://linkedin-clone-orcin.vercel.app"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-cyan-400 text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/pcha07/linkedin-clone"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-cyan-400 text-black font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Netflix})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider">
                Netflix Clone 
              </span>
              <p className="p-2">
                Payment Info - Card Number:4242 4242 4242 4242 Exp:42/42 CVC:424
              </p>
              <div className="pt-8 text-center">
                <a
                  href="https://netflix-clone-orcin-ten.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-cyan-400 text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/pcha07/netflix-clone"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-cyan-400 text-black font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Spotify})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md  flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider p-2">
                Spotify Clone
              </span>
              <p className="p-2">
                Register for free trial or login with your spotify account
              </p>

              <div className="pt-8 text-center">
                <a href="https://spotify-tau-two.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-cyan-400 text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/pcha07/spotify" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-cyan-400 text-black font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
