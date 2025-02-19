import React from 'react';
import HeroSection from '.././Components/heroSection/HeroSection';
import Footer from '.././Components/Footer_v1/Footer';
import Element_1 from '../Components/Element_1/Element_1';
import Message from '../Components/Message/Message';
import Board from '../Components/Board/Board';
import Icons from '../Components/Icons/Icons';
import Inquriy from '../Components/Inquiry/Inquiry';
import Registration from '../Components/Regestration/Registration';
import Calender from '../Components/Calender/Calender';
import Membership from '../Components/Membership/Membership';
import NavbarTest from '../Components/NabarTest/NavbarTest';
import Cal_bg from '../Components/Calender/Cal_bg';


function Home() {
  return (
    <>
      <NavbarTest/>
      <HeroSection />
      <Element_1/>
      <Message/>
      <Board/>
      <Registration/>
      <Cal_bg/>
      <Membership/>
      <Inquriy/>
      <Icons/>
      <Footer/>
    </>
  );
}

export default Home;