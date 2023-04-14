import React from 'react';
import { navs } from '../data';


const Navs = () => {
  
  return (
    <nav>
      <ul className='flex gap-x-10 items-center justify-center pt-20 w-50'>
        {navs.map((item, index) => {
          // destructure item
          const { href, name} = item;
          return (
            <li key={index}>
            
              <a className='hover:text-sky-400 transition' href={href}>
                
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navs;
