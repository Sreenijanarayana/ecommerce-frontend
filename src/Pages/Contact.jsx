import React from 'react';
import './About.css';

const Contact = () => {
  return (
    <div className="about-container">
      <h2 className="title">Contact Us</h2>
      
      <p className="text">
        We are always here to help with any questions, concerns, or feedback you may have. Please reach out to us using the information below.
      </p>
      <br/>
      <h3 className="title">Office Address</h3>
      <p className="text">
        Nr Pet<br />
        Gudur, Andhra Pradesh, India - 524101<br />
      </p>
      <br/>
      <h3 className="title">Customer Support</h3>
      <p className="text">
        Email: <a href="mailto:shopfashion9999@gmail.com">shopfashion9999@gmail.com</a><br />
        Phone: <a href="tel:+919966874025">+91 9966874025</a><br />
      </p>

      <br/>

      <h3 className="title">Business Inquiries</h3>
      <p className="text">
        For partnerships or business inquiries, please email us at <strong><a href="mailto:shopfashion9999@gmail.com">shopfashion9999@gmail.com</a></strong>.
      </p>

     
    </div>
  );
};

export default Contact;
