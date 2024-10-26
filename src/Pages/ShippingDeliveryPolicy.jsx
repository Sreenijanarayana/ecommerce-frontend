import React from 'react';
import './About.css';  // Reuse the existing CSS

const ShippingDeliveryPolicy = () => {
  return (
    <div className="about-container">
      <h2 className="title"><strong>Shipping & Delivery Policy</strong></h2>

{/* 
      <h3 className="title"><strong>1. Shipping Methods:</strong></h3>
      <p className="text">
        We offer various shipping methods to ensure that your orders reach you safely and on time. Our shipping partners include:
      </p>
      <ul className="text">
        <li>Standard Shipping</li>
        
      </ul> */}

      <h3 className="title"><strong>1. Delivery Times:</strong></h3>
      <p className="text">
        Delivery times may vary based on your location and the shipping method selected at checkout. Generally, you can expect:
      </p>
      <ul className="text">
        <li>Standard Shipping: 5-7 business days</li> 
      </ul>

      <h3 className="title"><strong>2. Shipping Costs:</strong></h3>
      <p className="text">
        Shipping costs are calculated at checkout based on your location, the weight of the items, and the shipping method selected. We often offer promotions for free shipping on orders over a certain amount.
      </p>

      <h3 className="title"><strong>3. Order Tracking:</strong></h3>
      <p className="text">
        Once your order is shipped, you will receive a confirmation email with tracking information. You can use this information to track your order's status until it arrives at your designated address.
      </p>

      <h3 className="title"><strong>4. Delivery Issues:</strong></h3>
      <p className="text">
        If you experience any issues with your delivery, such as a missing or damaged item, please contact our customer support team within 48 hours of receiving your order. We will work to resolve the issue as quickly as possible.
      </p>

      <h3 className="title"><strong>5. Changes to This Policy:</strong></h3>
      <p className="text">
        We reserve the right to update or modify this Shipping & Delivery Policy at any time. Please review this policy periodically for changes.
      </p>
      
      <h3 className="title"><strong>6. Contact Us:</strong></h3>
      <p className="text">
        If you have any questions about our shipping and delivery policies, please reach out to us at <strong>shopfashion9999@gmail.com</strong> or call us at <strong>+91 9966874025</strong>.
      </p>
    </div>
  );
};

export default ShippingDeliveryPolicy;
