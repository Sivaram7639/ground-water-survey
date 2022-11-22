import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import "./Submitform.css"

export const ContactUs = () => {
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
      <div>
        <div className="forms"  >
        <form className="submit" ref={form} onSubmit={sendEmail} >
          <h1 className="connect">CONNECT US!</h1>
          <label>NAME:</label>
           <input className="name" type="text" name="name" id="name" placeholder="NAME" ></input>
           <label>EMAIL:</label>
           <input className="email" type="text" name="email" id="email" placeholder="EMAIL" ></input>
           <input className="btn" type="submit" value="SEND" onClick={()=>alert("successfully sented")}></input>
        </form>
    </div>
      </div>
    )
  }
export default ContactUs;
