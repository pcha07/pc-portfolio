import React from "react";

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-white text-black'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-cyan-400'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>I'm a web developer with an interest in building quality user experiences.With skills in design, digital marketing, and excellent programming skills, I can be the perfect fit for your project.</p>
            </div>
            <div>
              <p></p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
