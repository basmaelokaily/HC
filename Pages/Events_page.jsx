import React from 'react'
import Au_Hero from '../Components/about_us/Au_Hero'
import Footer from '.././Components/Footer_v1/Footer';
import Events from '../Components/Events/Events';
import NavbarTest from '../Components/NabarTest/NavbarTest';
import { useLocation } from 'react-router-dom';
import Calender from '../Components/Events/Calender/Calender';
import Desc_or_Spkrs from '../Components/Events/Describtion_Speakers/Desc_or_Spkrs';


function Events_page() {

    let { state } = useLocation();

    if (!state) {
        return <div>No item ID provided</div>;
    }

  return (
    <div>
      <NavbarTest/>
      <Events id={state}/>
      <Desc_or_Spkrs/>
      <Calender/>
      <Footer/>
    </div>
  )
}

export default Events_page