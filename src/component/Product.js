import React, { useState } from 'react';
// import data
import { pricing } from '../data';
// import icons
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Product = () => {
  // index state
  const [index, setIndex] = useState(1);
  // destructure pricing
  const { title, cards } = pricing;
  return (
    <section className='section mb-100'>
      <div className='container'>
        {/* title */}
        <h2
          className='h2 mb-10  text-center text-4xl '
          data-aos='fade-up'
          data-aos-delay='200'
        >
          {title}
        </h2>
        {/* cards */}
        <div className='flex flex-row xl:flex-row gap-y-5  
        p-10 grid grid-cols-1 sm:grid-cols-1 grid-cols-1 lg:grid-cols-1 lg:grid-cols-4 gap-x-6 ml-100'>
          {cards.map((card, cardIndex) => {
            // destructure card
            const { image, title, name, price, userAmount, btnText, delay } =
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
                  } w-[250px] h-[550px] rounded-[12px] p-[40px] cursor-pointer transition-all gap-x-40 ml-40 `}
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
                  <div className='text-[20px] font-semibold mb-8 text-2xl '>{name}</div>
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

export default Product;
