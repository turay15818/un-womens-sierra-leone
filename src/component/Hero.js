import React from 'react';
import Navs from './Navs';

const Hero = () => {
  // destructure hero data
  // const { btnText, compText, image } = hero;
  return (
    <><section className='min-h-[450px] py-12 lg:min-h-[500px] bg-overview bg-cover bg-left-top pt-[30px] lg:pt-[87px] opacity-19'>
      <div className='container mx-auto min-h-[450px] flex justify-center items-center'>
        <div className='flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left'>
          {/* text */}
          <div className='flex-1'>
            <p
              className='title mb-2 lg:mb-2 text-4xl text-center  pb-10 text-white'
              data-aos='fade-down'
              data-aos-delay='500'
            >
              Find the best business in town
            </p>
            <p
              className='title mb-2 mb-2 text-4xl text-center text-white bg-sky-400 rounded-lg'
              data-aos='fade-down'
              data-aos-delay='500'
            >
              Browse our top categories and locations
            </p>


            {/* btn & comp text */}
            <div
              className='flex items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6 bg-gray-800 mt-20 rounded-lg'
              data-aos='fade-up'
              data-aos-delay='700'
            >
              <input
                className='lead mb-5 w-full mt-5 rounded-lg text-stone-800 h-12'
                data-aos='fade-down'
                data-aos-delay='600' />
              <button className='btn btn-sm btn-accent flex justify-center items-center  bg-sky-800 w-50 '>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div
      className='bg-stone-300 text-white h-40 w-82 mb-30'
      data-aos='fade-up'
      data-aos-delay='700'
    >
        <Navs />
      </div>
      </>
  );
};

export default Hero;
