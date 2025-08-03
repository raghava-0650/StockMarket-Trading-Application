import React from 'react';

import Footer from '../Footer';
import Navbar from '../Navbar';
import OpenAccount from '../OpenAccount';
import Hero from './Hero';
import Pricing from './Pricing';
import Stats from './Stats';

const HomePage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Stats />
        <Pricing />
        <OpenAccount />
        <Footer />
    </>
  )    
}

export default HomePage