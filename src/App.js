import React from 'react';
import{BrowserRouter,Routes,Route ,} from "react-router-dom";
import About from "./components/About";
import Services from "./components/Services";
import Booknow from "./components/Booknow";
import Navbar from "./components/Navbar";
import Designer from './components/Designer';
import Whatsapp from './components/Whatsapp';
import Social from "./components/Social";
import Mainpage from "./components/Mainpage";
import ContactUs from "./components/Submitform";
import Personal from "./components/Personel";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/Services" element={<Services/>} />
        <Route exact path="/Booknow" element={<Booknow/>} />
        </Routes>
      </BrowserRouter>
      <Mainpage/>
      <ContactUs/>
      <Personal/>
      <Social/>
      <Designer/>
      <Whatsapp/>
    </div>
  )
}

export default App