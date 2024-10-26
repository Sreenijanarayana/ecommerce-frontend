import React from 'react';
import './About.css';  // Reuse the existing CSS

const RefundCancellationPolicy = () => {
  return (
    <div className="about-container">
      <h2 className="title"><strong>Refund & Cancellation Policy</strong></h2>

      <h3 className="title"><strong>1. Cancellation Policy:</strong></h3>
      <p className="text">
        You may cancel your order before it has been shipped. To cancel an order, please contact our customer support team at <strong>shopfashion9999@gmail.com</strong> or call us at <strong>+91 9966874025</strong>. Once an order is shipped, it cannot be cancelled through our website.
      </p>

      <h3 className="title"><strong>2. Refund Policy:</strong></h3>
      <p className="text">
        Refunds are processed based on the following conditions:
      </p>
      <ul className="text">
        <li>The item is returned in its original condition, unused, and with all original packaging and tags intact.</li>
        <li>Refund requests will be accepted for products that have defects or were damaged during transit.</li>
        <li>If the wrong item was sent or if an item is missing, you are eligible for a refund or replacement.</li>
      </ul>
      <p className="text">
        To initiate a refund, please follow these steps:
      </p>
      <ol className="text">
        <li>Contact our customer support to report the issue.</li>
        <li>Provide your order number and any relevant details regarding the reason for the refund.</li>
        <li>Once your request is approved, follow the instructions provided to return the item.</li>
      </ol>

      <h3 className="title"><strong>3. Refund Processing Time:</strong></h3>
      <p className="text">
        Once the returned product is received and inspected, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed within <b>5-7 working days</b>, and a credit will automatically be applied to your original payment method.
      </p>

     
      <h3 className="title"><strong>4. Contact Us:</strong></h3>
      <p className="text">
        For any inquiries regarding cancellations or refunds, please reach out to our customer support team at <strong>shopfashion9999@gmail.com</strong> or call us at <strong>+91 9966874025</strong>.
      </p>
</div>
      
  );
};

export default RefundCancellationPolicy;
