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
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-5">
          {cards.map((card, cardIndex) => {
            // destructure card
            const { image,name, account,delay } =
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
                  } w-[500px] h-[350px] rounded-[12px] p-[40px] cursor-pointer transition-all ml-20`}
                >
                  <div class=" w-full h-full  lg:max-w-full lg:flex">
                  <div class="h-full lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                  <img  src={image} alt=""/>
                  </div>

                  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div class="mb-8">
                  <p class="text-sm text-gray-600 flex items-center">
                   {name}
                    </p>
                  <div class="text-gray-900 font-bold text-xl mb-2">Best Mountain Trails 2020</div>
                   <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
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
            );
          })}
        </div>
    </section>
  );
};

export default Recents;
