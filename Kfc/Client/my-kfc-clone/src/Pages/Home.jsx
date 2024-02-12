import React from 'react';
import Navbar from '../Components/Header/Header';
import Menubar from '../Components/Menubar/Menubar';
import Slider from '../Components/Slider/Slider';
import Main from '../Components/Main/Main';
import Footer from '../Components/Footer/Footer';

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Menubar/>
    <Slider/>
    <Main/>
    <Footer/>
    </div>
  )
}

export default Home