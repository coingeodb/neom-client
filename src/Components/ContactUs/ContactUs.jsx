import "./ContactUs.css";


import TelegramIcon from "@mui/icons-material/Telegram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const ContactUs = () => {
  return (
    <div className="contactUs">
      <div className="contactHead">Contact Us</div>
      <div>
        <p className="contactAddress">
          Main Office: Falkenstrasse 14, 8024 Zürich, Switzerland <br />
          Contact us at: contact.mainoffice@gmail.com <br />
          <br />
          <br />
          Corporate Office: 535 Fahey Road Apt. 184, <br />
          New Austenview, Utah Contact us at: contact.corpoffice@gmail.com
          <br />
        </p>
      </div>
      <div>
      <button onClick={()=>{
                  window.scrollTo({top: 0, behavior: "smooth"})
                }} >INVEST IN THE LINE</button>
      </div>
      <a className="contactSocial" href="www.google.com" target="_blank" rel="noreferrer">
        <div className="contactSocialIcon">
          <TelegramIcon fontSize="large"  />
        </div>
        <a className="contactSocialIcon" href="www.google.com" target="_blank" rel="noreferrer">
          <WhatsAppIcon fontSize="large" />
        </a>
        <a className="contactSocialIcon" href="mailto: a@b.com" target="_blank" rel="noreferrer">
          <MailOutlineIcon fontSize="large" />
        </a>
      </a>
      {/* <p className="contactCopyright">
        &copy; Bitcoin Payment Bank. All rights reserved.
      </p> */}
    </div>
  );
};
export default ContactUs;
