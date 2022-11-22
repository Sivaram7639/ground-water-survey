import React from 'react';
import Scanner from "../assets/scanner.png";
import Detecter from "../assets/detecter.png";
import Detecter2 from "../assets/detecter2.png";
import "./Services.css";

function Services() {
  return (
    <div className="service">
        <h1 className="pageheader">SERVICES </h1>
        <img className="detecter" src={Scanner} alt="tool" />
        <h1 className="mechname">GER FRESH RESULT</h1>
        <h1 className="spec">
        We used locator for identifying point in filed. That locator is GER fresh fresh worlds No 1 brand and giving high accurancy in the market.FRESH RESULT 1 SYSTEM: a device with multiple features searching underground water and artesian wells: - Freshwater Search system - Natural water search system.</h1>
        <img src={Detecter} alt="detecter" className="detecter1" />
        <h1 className="mechname1">ADMT Single Channel</h1>
        <h1 className="specs">ADMT Single Channel Real-time imaging groundwater detector, Effectively judge the location, depth, water yield and other relevant information of groundwater, so as to guide the operation of drilling and drawing water, and improve the success rate of drilling</h1>
        <img className="detecter2" src={Detecter2} alt="detect" />
        <h1 className="mechname2">PQWT S 500</h1>
        <h1 className="specs2" >It is based on the field source of earth's electromagnetic field and differences in conductivity of different underground geological structures, to study the variation law of electric field components at different frequencies to study the geological structure and changes. Changes in
geological structure are displayed in real-time through multiple curves. Automatic mapping geological profile by one key operate easily, get rid of complicated computer graphics.Geological structure and specific information such as aquifers, fractures, faults, and caves.</h1>
    </div>
  )
}

export default Services