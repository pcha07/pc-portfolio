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
              <p>I'm glad you're taking the time to learn about me. Please look around.</p>
            </div>
            <div>
              <p>I am passionate about building quality user experiences. Being a curious individual, I am able to learn new technologies quickly thanks to my ambition. My personal traits help me excel in any situation that is in front of me. This is what makes me an excellent fit for your company. </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
