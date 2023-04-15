import React, { useState } from 'react';
// import data
import { pricing } from '../data';
// import icons
import { HiCheck, HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Products = () => {
  // index state
  const [index, setIndex] = useState(1);
  // destructure pricing
  const { title, cards } = pricing;
  return (
    <section className='section'>
      <div className='container mx-auto'>
        {/* title */}
        <h6
          className='h2 mb-10 lg:mb-20 text-center text-3xl'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          {title}
        </h6>
        {/* cards */}
        <div className='flex flex-col lg:flex-row lg:gap-x-[60px] gap-y-[60px] lg:gap-y-6 justify-center items-center
        p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 lg:grid-cols-3 gap-x-20 justify-center items-center '>
          {cards.map((card, cardIndex) => {
            // destructure card
            const { image, title,price, userAmount, btnText, delay } =
              card;
            // card
            return (
              <div
                data-aos='fade-up'
                data-aos-delay={delay}
                data-aos-offset='300'
                key={cardIndex}
              >
                <div
                  onClick={() => setIndex(cardIndex)}
                  className={`${
                    cardIndex === index
                      ? 'bg-white shadow-2xl'
                      : 'border border-black'
                  } w-[350px] h-[550px] rounded-[12px] p-[40px] cursor-pointer transition-all`}
                >
                  {/* card icon */}
                  <div className='mb-8'>
                    <img src={image} alt='' />
                  </div>
                  {/* card title */}
                  <div className='text-[20px] font-semibold mb-8 text-3xl '>{title}</div>
                  <div className='mb-10'>
                    <div>
                      <span className='text-2xl font-semibold'>{price}/</span>
                      <span className='text-xl text-light font-light'>
                        year
                      </span>
                    </div>
                    <div className='text-base text-light'>{userAmount}</div>
                  </div>
                  {/* btn */}
                  <button
                    className={`${
                      cardIndex === index
                        ? 'bg-stone-800 hover:bg-accentHover text-white'
                        : 'border border-stone-800 text-stone-800'
                    } btn btn-sm space-x-[14px]`}
                  >
                    <span>{btnText}</span>
                    <HiOutlineArrowNarrowRight />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
