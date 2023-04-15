import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from './component/Navbar';
// import Overview from './component/Overview';
import Hero from './component/Hero';
import Recents from './component/Recents';
import Footer from './component/Footer';
import Products from './component/Products';



function App() {
  Aos.init({
    duration: 1800,
    offset: 100,
  });
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Products/>
      <Recents/>
      {/* <Overview/> */}
      <Footer/>
    </div>
  );
}

export default App;
