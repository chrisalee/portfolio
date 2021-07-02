import React from "react";
import emailjs from "emailjs-com";
// import Particles from "react-particles-js";

const Contact = () => {
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        event.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

      event.target.reset();
  };

  return (
    <div>
      {/* <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "star",
              stroke: {
                width: 8,
                color: "#16e0bd",
              },
            },
          },
        }}
      /> */}
      <section className="contact" id="contact">
        <div className="contact__container">
          <h2 className="contact__title">Contact</h2>
          <form className="contact-form contact__form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number"/>
            <label>Name</label>
            <input type="text" name="name" className='contact__form--input'/>
            <label>Email</label>
            <input type="email" name="email" className='contact__form--input'/>
            <label>Subject</label>
            <input type="text" name="subject" className='contact__form--input'/>
            <label>Message</label>
            <textarea name="message" rows="10" className='contact__form--input'/>
            <input type="submit" value="Send" className="btn btn__form" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
