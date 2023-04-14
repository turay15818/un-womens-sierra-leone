import React from 'react';
// import data
import { copyright } from '../data';

const Footer = () => {
  // destructure copyright data
  const { link1, link2, copyText, social } = copyright;
  return (
    <div
      className='flex flex-col items-center gap-y-2 lg:flex-row lg:justify-center bg-stone-800 h-20'
      data-aos='fade-up'
      data-aos-offset='0'
      data-aos-delay='200'
    >
      {/* links */}
      <div className='flex gap-x-6 text-white'>
        <a href={link2.href}>
          {link2.name}
        </a>
      </div>
      {/* copyright text */}
      <div className='text-white pl-2'>{copyText}</div>
      {/* social icons */}
      <ul className='flex gap-x-[12px] bg-white ml-5 '>
        {social.map((item, index) => {
          // destructure icon
          const { href, icon } = item;
          return (
            <li key={index}>
              <a href={href}>
                <img src={icon} alt='' />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
