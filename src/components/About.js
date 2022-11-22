import React from 'react';
import "./About.css";
import Logo from "../assets/log.png";

function About() {
  return (
    <div className="aboutcom">
      <h1 className="header"> ABOUT US </h1>
      <img  className="logo" src={Logo} alt="logo" />
        <h1 className="para">
        We are Mpr all india ground water survey working in the field of environment protection and natural resources conservation. We have expertise in Rain Water Harvesting (RWH) Systems, Hydro-geological survey and bore well Management.As you may be aware unplanned urban development has led to the exploitation of fresh water sources to such an extent that the availability of fresh water is reducing from the planet. Population explosion is resulting into increased water demand which has Worsened the situation. In addition to this, unplanned extraction of ground water has disturbed the hydrological balance. keeping all these factors in mind, we have to implement measures to conserve water resources. 
        We strongly believe that by integrating Govt.
         agencies, NGO's and citizen efforts, awareness about water conservation can be much effective. It will reap the benefits of rain water harvesting on larger scale.
        
        </h1>
    </div>
  )
}

export default About