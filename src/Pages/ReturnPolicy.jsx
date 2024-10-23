import React from 'react';
import './About.css';  // Reuse the existing CSS

const ReturnPolicy = () => {
  return (
    <div className="about-container">
      <h3 className="title"><strong>Cancellation Policy:</strong></h3>
      <p className="text"><strong>1.</strong> In case there is an order cancellation, please do so before it is shipped. Once the product is shipped, it can’t be cancelled using our website.</p>

      <h3 className="title"><strong>Return Policy:</strong></h3>
      <p className="text"><strong>1.</strong> Return/Exchange is available for selected products only. The return information is available on the product page on the website. The return policy of a product can be changed without prior notice.</p>
      <p className="text"><strong>2.</strong> In case we do not have a pickup service available at your location, you would have to self-ship the product to our office address.</p>
      <p className="text"><strong>3.</strong> Return/Exchange charges may apply on a case-to-case basis.</p>

      <h3 className="title"><strong>Refund Policy:</strong></h3>
      <p className="text">We accept refund requests if there is a mismatch in quality, size, color, or design, or in case an item is missing/wrong/damaged in a combo order.</p>
      <p className="text">Once the product has been picked up, the refund is processed within 5-7 working days using the same transaction mode.</p>

      <h3 className="title"><strong>Note for Return:</strong></h3>
      <p className="text">
        • The items should be unused and unwashed for hygiene reasons.<br />
        • The product should have the original packaging and tags in place. Items without the original tags will not be accepted.<br />
        • Customized products cannot be returned or exchanged.<br />
        • Return/Exchange requests that are not raised within the return period (refer to product page) will not be accepted.
      </p>
    </div>
  );
};

export default ReturnPolicy;
