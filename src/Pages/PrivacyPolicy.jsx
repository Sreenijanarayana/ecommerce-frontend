import React from 'react';
import './About.css';

const PrivacyPolicy = () => {
  return (
    <div className="about-container">
      <h2 className='title font-extrabold'>Privacy Policy</h2>
      <p className="text">
        This Privacy Policy outlines how <b>Shop website</b> collects, uses, discloses, and protects your information when you interact with our website. By using our website, you agree to the collection and use of information per this policy.
      </p>

      <h3 className="title font-semibold">Information We Collect</h3>
      <p className="text">
        We collect personal information necessary for registration or order fulfillment, including your name, address, phone number, email, and payment details. Additionally, we may collect your IP address and use cookies to enhance your browsing experience.
      </p>

      <h3 className="title font-semibold">How We Use Your Information</h3>
      <p className="text">
        The information we collect is used to:
      </p>
      <ul>
        <li>Process and fulfill your orders.</li>
        <li>Provide customer support and respond to inquiries.</li>
        <li>Send updates, offers, or notifications related to your purchases.</li>
        <li>Analyze site usage and improve our services.</li>
      </ul>

      <h3 className="title font-semibold">Sharing Information with Third Parties</h3>
      <p className="text">
        We only share your information with trusted partners, like payment processors and shipping companies, to fulfill your orders. All information shared with third parties is protected and limited to essential details. We may also share non-personal, aggregated data with our advertisers or business partners.
      </p>

      <h3 className="title font-semibold">Use of Cookies</h3>
      <p className="text">
        Our website uses cookies to provide a customized experience and remember your preferences. You can control cookie usage in your browser settings, though some site functions may be limited if cookies are disabled.
      </p>

      <h3 className="title font-semibold">Security of Your Data</h3>
      <p className="text">
        We employ security measures like encryption and secure servers to protect your personal information. Only authorized personnel have access to sensitive data.
      </p>

      <h3 className="title font-semibold">Data Retention</h3>
      <p className="text">
        We retain your data only as long as needed for our business purposes or as required by law. Once no longer necessary, your information is securely deleted or anonymized.
      </p>

      <h3 className="title font-semibold">Your Rights and Choices</h3>
      <p className="text">
        You have the right to access, update, or delete your personal information. You may also opt out of marketing communications at any time by following the instructions in our emails or by contacting us directly at [contact email].
      </p>

      <h3 className="title font-semibold">Contact Us</h3>
      <p className="text">
        If you have questions about our Privacy Policy or wish to exercise your rights, please contact us at <a href="mailto:shopfashion9999@gmail.com">shopfashion9999@gmail.com</a>.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
