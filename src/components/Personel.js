import React from 'react';
import "./Personel.css";
import {FaWhatsapp ,FaPhoneSquareAlt ,FaMapMarkerAlt} from "react-icons/fa";

const Personel = () => {
  return (
    <div className="companydetails">
      <div className="Headerdetails">
      <h1 className="companytitle">COMPANY DETAILS</h1>
      <p className="details">COMPANY NAME:<span className="owner"> MPR</span></p>
      <p className="details"> OWNER NAME:<span className="owner"> RAMRAJ.M</span></p>
      <p className="details">LOCATION:<span className="owner"> ODDANCHATRAM.</span></p>
     <div className="icons">
      <h1 className="contact">CONTACT</h1>
      <a className="whats" href="https://wa.me/9789591793"><FaWhatsapp/></a>
      <a  className="phone" href="tel:9789591793"><FaPhoneSquareAlt/></a>
      <a className="map" href="https://g.co/kgs/wf6nSR"><FaMapMarkerAlt/></a>
      </div>
      </div>
    </div>
  )
}

export default Personel;