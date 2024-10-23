import React from 'react';
import './About.css';  // Reuse the existing CSS

const PrivacyPolicy = () => {
  return (
    <div className="about-container">
      <div className='title font-extrabold'>Privacy policy</div>
      <p className="text">
        Your personal information is always kept confidential. The privacy policy is displayed on the website. 
        The type of info collected from the customers and usage of this information is published here. We have a policy of 
        not disclosing any information to third parties. Using our website means you have agreed to the terms and conditions 
        of the website. It applies to the people who have not got any transactions or who have got registered to the site and 
        had business. Personal information is mainly used to locate or contact a person. Other information like name, address, 
        phone number, fax, credit card information, financial profiles, identification number and e-mail address are also available 
        with us and are always confidential.
      </p>
<br/>
      <h6 className="title font-semibold">Terms Of Our Privacy Policy</h6>

      <h3 className="title font-semibold">Personal Information That We Collect</h3>
      <p className="text">
        Necessary information is collected for becoming a subscriber or member of our website. Our system collects the IP address 
        of your computer automatically. But this detail does not give information about any particular person. However, 
        <b> Shop website</b> does not collect information about children.
      </p>

      <h3 className="title font-semibold">Uses Of The Information Collected</h3>
      <p className="text">
        All the personal information collected is kept confidential. The information may be used for:
      </p>
      <ul>
        <li>Send news about the website.</li>
        <li>Calculate the number of visitors.</li>
        <li>Monitor the website.</li>
        <li>Know the geographical location of the users.</li>
        <li>Contact to give information about the website.</li>
        <li>Give a better shopping experience online.</li>
        <li>Update about the recent offers on the website.</li>
      </ul>
      <p className="text">
        Some of the personal information is shared with the courier companies like addresses/contact details. We have to give some 
        information to vendors. This personal information helps Riya Fashion to perform their duties and fulfil the order requirements. 
        But private information cannot be accessed by unauthorized persons or organizations. The Company will disclose your information, 
        including, without limitation, your name, city, state, telephone number, email address, user ID history, quoting and listing history, 
        and complaints, to law enforcement or other government officials if it is required to do so by law, regulation, or other government authority.
      </p>
      <p className="text">
        Cookies are used to save your personal information on your computer. It helps to calculate the number of times you use our website. 
        Cookies do not keep any personal data of the visitors. When the user browses <b>Shop website</b>, cookies are replaced according to 
        the interests of the users. Here none of your particulars like e-mail address, telephone, name, or postal address is collected. 
        We give you a safe shopping experience.
      </p>
      <p className="text">
        Riya Fashion gives some aggregate particulars like website statistics or demographics to sponsors, advertisers, and other third parties. 
        Third parties are not authorized to get any of your personal information. Riya Fashion has many links to other websites. But once you leave 
        <b> Shop website</b>, our privacy policy ends.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
