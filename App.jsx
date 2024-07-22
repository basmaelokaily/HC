import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './Signin/Login';
import ForgotP from './Signin/Forgot_pass';
import Register from './Signup/Register';
import NavbarTest from './Components/NabarTest/NavbarTest';
import HeroSection from './Components/heroSection/HeroSection';
import Footer from './Components/Footer_v1/Footer';
import Home from './Pages/Home';
import Element_1 from './Components/Element_1/Element_1';
import Message from './Components/Message/Message';
import Calender from './Components/Calender/Calender';
import About_us from './Pages/About_us';
import Membership from './Pages/Membership';
import Events_page from './Pages/Events_page';
import Events from './Components/Events/Events';

//import TestFooter from './Components/Testfooter/TestFooter';


//import Login_version2 from './Signin/Login_version2';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about-us" element={<About_us/>}></Route>
          <Route path="/membership" element={<Membership/>}></Route>
          <Route path='/events' element={<Events_page/>}></Route>
          <Route path='/events_comp' element={<Events/>}></Route>
          <Route path="/login" element={ <SignIn/> } />
          <Route path="/forgotpassword" element={<ForgotP/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/navbar" element={<NavbarTest/>}/> 
          <Route path="/herosection" element={<HeroSection/>}/>    
          <Route path="/footer" element={<Footer/>}/> 
          <Route path="/firstelement" element={<Element_1/>}/> 
          <Route path="/message" element={<Message/>}/> 
          <Route path='/cal' element={<Calender/>}/>

{/**          <Route path="/footertest" element={<TestFooter/>}/>    
 */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App


/**<Route path="/navbar-test" element={<NavbarTest/>}/> */