import React from 'react';
import './About.css';  // Reuse the existing CSS

const Contact = () => {
  return (
    <div className="about-container">
      <h2 className="title">Contact Us</h2>
      
      <p className="text">
        We are always here to help you with any questions, concerns, or feedback you may have. Please feel free to reach out to us using the information provided below.
      </p>
      <br />
      <h3 className="title">Office Address</h3>
      <p className="text">
        Shop Fashion Inc.<br />
        123 Fashion Street<br />
        New Delhi, India 110001<br />
      </p>
      <br />
      <h3 className="title">Customer Support</h3>
      <p className="text">
        Email: support@shopfashion.com<br />
        Phone: +91 12345 67890<br />
        Working Hours: Monday to Friday, 9:00 AM - 6:00 PM
      </p>
      <br />
      <h3 className="title">Follow Us</h3>
      <p className="text">
        Stay connected with us on social media:<br />
        Facebook: <a href="https://www.facebook.com/shopfashion" target="_blank" rel="noopener noreferrer">facebook.com/shopfashion</a><br />
        Instagram: <a href="https://www.instagram.com/shopfashion" target="_blank" rel="noopener noreferrer">@shopfashion</a><br />
        Twitter: <a href="https://www.twitter.com/shopfashion" target="_blank" rel="noopener noreferrer">@shopfashion</a>
      </p>
      <br />
      <h3 className="title">Business Inquiries</h3>
      <p className="text">
        For partnership or business-related inquiries, please email us at <strong>business@shopfashion.com</strong>.
      </p>
    </div>
  );
};

export default Contact;
