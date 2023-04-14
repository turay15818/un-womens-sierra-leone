import React from 'react';
// import data
import { nav } from '../data';

const MobileNav = () => {
  return (
    <div className='bg-stone-800/95 w-full h-50'>
      <ul className='h-full flex flex-col justify-center items-center gap-y-8'>
        {nav.map((item, index) => {
          // destructure item
          const { href, name } = item;
          return (
            <li key={index}>
              <a className='link text-white text-xl' href={href}>
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileNav;
