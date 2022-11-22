import React from 'react';
import {FiTwitter , FiYoutube} from "react-icons/fi";
import{FaFacebook ,FaInstagram} from "react-icons/fa";
import "./Social.css"

function Social() {
  return (
    <div className="social">
        <h1 className="tittle">Follow To Us!</h1>
        <a className="twit" href="https://twitter.com/all_mpr?=0bljjZ0euS16e8ooXpj4Q&s=09">
            <FiTwitter/>
        </a>
        <a className="tube" href="https://youtube.com/channel/UCAsJrGElBlMbmmfmwWQN08w">
           <FiYoutube/> 
        </a>
        <a className="fbk" href="https://facebook.com/profile.php?id=100056041284473" >
            <FaFacebook/>
        </a>
        <a className="what" href="https://instagram.com/invites/contact/?i=ztbbyi5h9pk0&utm_content=m24thtc">
            <FaInstagram/>
        </a>
        </div>
  )
}

export default Social