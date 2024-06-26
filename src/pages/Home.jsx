import React from 'react';
import ScrollToTop from '../components/ScrollToTop'
import { HashLink } from 'react-router-hash-link';


import Hero from '../components/Hero';
import KeyFutures from '../components/KeyFutures'
import ScreenApp from '../components/ScreenApp';
import Benefits from '../components/Benefits';
import Supporter from '../components/Supporter';


function Home() {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <KeyFutures />
      <ScreenApp />
      <Benefits />
      <Supporter />
    </>
  );
}

export default Home;