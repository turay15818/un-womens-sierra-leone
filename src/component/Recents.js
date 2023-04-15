import React, { useState } from 'react';
// import data
import { recent } from '../data';


const Recents = () => {
  // index state
  const [index, setIndex] = useState(1);
  // destructure pricing
  const { title, cards } = recent;
  return (
    <section className='section'>
        {/* title */}
        <h6
          className='h2 mb-10 mb-20 text-center text-3xl'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          {title}
        </h6>
        {/* cards */}
        <div className='flex flex-col lg:flex-row lg:gap-x-[10px] gap-y-[10px] lg:gap-y-5 justify-center items-center
        p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 lg:grid-cols-3 justify-center items-center ml-15 '>
          {cards.map((card, cardIndex) => {
            // destructure card
            const { image,name, userAmount,delay,account } = card;
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
                  } `}
                >
                   <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                     <div class="md:flex">
                      <div class="md:shrink-0">
                       <img className="h-48 w-full object-cover md:h-full md:w-48" src={image} alt=""/>
                    </div>
                   <div class="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{name}</div>
                    <p class="mt-2 text-slate-500">{userAmount}</p>
                    <p class="mt-2 text-slate-500">{userAmount}</p>
                    <div class="flex items-center">
                     <img class="w-10 h-10 rounded-full mr-4" src={account} alt="Avatar of Writer"/>
                      <div class="text-sm">
                       <p class="text-gray-900 leading-none">John Smith</p>
                       <p class="text-gray-600">Aug 18</p>
                   </div>
                 </div>
                 <button
                    className={`${
                      cardIndex === index
                        ? 'bg-stone-800 hover:bg-accentHover text-white'
                        : 'border border-stone-800 text-stone-800'
                    } btn btn-sm space-x-[14px]`}
                  >
                    open this
                 
                  </button>
                 </div>
                </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    </section>
  );
};

export default Recents;
