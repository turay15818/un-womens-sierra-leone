import React,{useEffect,useState} from "react";
import { header } from "../data";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi';

const Navbar =() =>{
    const [mobileNav, setMobileNav] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const{logo}= header

    useEffect(() => {
        window.addEventListener('scroll', () => {
          window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        });
      });
  
    return(

        <header
        className={`${
          isActive ? 'lg:top-0 bg-white shadow-2xl' : 'lg:top-[60px]'
        } py-6 lg:py-4 fixed w-full transition-all z-10`}
      >
        <div className='container  flex justify-between items-end'>
          
          <p data-aos='fade-down' data-aos-delay='1000'>{logo}</p>
        
          <div
            className='hidden lg:flex justify-end'
            data-aos='fade-down'
            data-aos-delay='1200'
          >
            <Nav />
          </div>
   
           <button className='lg:hidden ' onClick={() => setMobileNav(!mobileNav)}>
            {mobileNav ? (
              <HiOutlineX className='text-3xl text-stone-800' />
            ) : (
              <HiMenuAlt4 className='text-3xl text-stone-800' />
            )}
          </button>
      
          <div
            className={`${
              mobileNav ? 'left-0' : '-left-full'
            }  fixed top-0 bottom-0 w-[40vw] lg:hidden transition-all`}
          >
            <MobileNav />
          </div>
        </div>
      </header>
    )
}
export default Navbar;