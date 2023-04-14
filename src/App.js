import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from './component/Navbar';
// import Overview from './component/Overview';
import Hero from './component/Hero';
import Product from './component/Product';
import Recents from './component/Recents';
import Footer from './component/Footer';



function App() {
  Aos.init({
    duration: 1800,
    offset: 100,
  });
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Product/>
      <Recents/>
      <Footer/>
      {/* <Overview/> */}
    </div>
  );
}

export default App;
