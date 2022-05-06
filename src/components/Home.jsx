import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="bg-white w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-cyan-400 font-semibold text-lg">Hello, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-black">
          Prabh Chahal
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-black/60">
          I'm a full stack developer.
        </h2>
        <p className="text-black py-4 max-w-[700px]">
          A full stack developer with an interest in developing functional and
          beautiful applications. I posses the qualities that make me a great
          fit for a team environment and also a quick learner.
        </p>
        <div>
          <Link to="projects" offset={-70}>
            <button className="text-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-cyan-400 hover:border-black">
              View Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
