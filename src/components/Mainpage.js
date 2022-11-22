import React from 'react';
import "./Mainpage.css";
import Picture from "../assets/mainpic.jpg";

function Mainpage() {
  return (
    <div className="Headerpage">
      <h1 className="india" >ALL INDIA</h1>
        <h1 className="title">SCIENTIFIC GROUND WATER SURVEY</h1>
        <h1 className="parag">It Is the investigation of underground formations to understand the hydrologic cycle, know the groundwater quality, and identify the nature, number and type of aquifers.   </h1>
        <img  className="picture" src={Picture} alt="man"  />
    </div>
  )
}

export default Mainpage;;