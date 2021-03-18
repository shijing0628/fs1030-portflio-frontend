import React from 'react';
import Banner from '../components/Banner/Banner';
import { SliderData } from '../data/SliderData';

function Home() {
 return (
  <div>
   <Banner slides={SliderData} />
  </div>
 )
}

export default Home
