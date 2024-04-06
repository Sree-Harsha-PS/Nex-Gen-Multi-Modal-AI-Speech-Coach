import React, { useRef } from 'react';
import './Join.css';
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();

  const handleJoin = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'your_service_id',
      'your_template_id',
      form.current,
      'your_user_id'
    )
      .then((result) => {
        console.log('Email sent successfully!');
      },
        (error) => {
          console.log('Error sending email:', error);
        }
      );
  };

  return (
    <>
      <div className="Join" id='join-us'>
        <div className="left-j">
          <hr />
          <div><span className='stroke-text'>Ready to</span><span>Master</span></div>
          <div><span>Your</span><span className='stroke-text'>Communication</span></div>
        </div>
        <div className="right-j">
          <form className="email-container" netlify ref={form} onSubmit={handleJoin}>
            <input netlify type="email" name='user_email' placeholder='Enter Email Address' />
            <button type='submit' className="btn btn-j">Join now</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Join;
