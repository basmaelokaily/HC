import React from 'react'
import Au_Hero from '../Components/about_us/Au_Hero'
import Footer from '.././Components/Footer_v1/Footer';
import Icons from '../Components/Icons/Icons';
import Au_Element from '../Components/about_us/Au_Element';
import Au_Element2 from '../Components/about_us/Au_Element2';
import NavbarTest from '../Components/NabarTest/NavbarTest';



function About_us() {
  return (
    <div>
      <NavbarTest/>
      <Au_Hero/>
      <Au_Element/>
      <Au_Element2/>
      <Icons/>
      <Footer/>
    </div>
  )
}

export default About_us