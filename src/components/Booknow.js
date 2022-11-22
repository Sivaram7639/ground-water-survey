import React, {useRef} from 'react';
import "./Booknow1.css";
import emailjs from "@emailjs/browser"

function Booknow() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5jd8e5x', 'template_ussyceq', form.current, 'BXxlg91M9RwQNmJ4a')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };
  return (
    <div className="booking" >
        <form className="bookform" ref={form} onSubmit={sendEmail}>
          <h1 className="bookingform">BOOKING FORM</h1>
        <label className="texttitle">NAME:</label>
        <input type="text" name="name" id="name" placeholder='NAME' className="contactform"></input>
        <label  className="texttitle">EMAIL:</label>
        <input type="text" name="email" id="email" placeholder='EMAIL' className="contactform" ></input>
        <label  className="texttitle">TIME:</label>
        <input type="time" name="time" placeholder="time" id="time" className="contactform" ></input>
        <label  className="texttitle">DATE:</label>
        <input type="date" name="date" id="date" placeholder="date" className="contactform" ></input>
        <label  className="texttitle">LOCATION:</label>
        <input type="text" name="place" placeholder='PLACE' className="contactform" ></input>
        <label  className="texttitle">PHONE:</label>
        <input type="text" name="phone" id="phone" placeholder='PHONE'className="contactform" ></input>
        <input  className="bttn" type="submit" name="name"  value="SEND" onClick={()=>alert("succesfully sented")}></input>
        </form>
      </div>
  )
}

export default Booknow;
