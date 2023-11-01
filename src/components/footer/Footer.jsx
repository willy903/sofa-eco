import React from "react";
import "./footer.css";
import illustrfooter from "./../assets/footer.png";
import {IoLocationSharp} from "react-icons/io5"
import{BsFillTelephoneFill} from "react-icons/bs"
import {IoMdMail} from "react-icons/io"
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"


const Footer = () => {
  return (
    <div className="footer">
      <div className="contactus">
        <div className="info">
          <h2>Need more information</h2>
          <p>
            Have questions or inquiries? We're here to help. Contact us via
            phone, email, or visit us at our office. Our team is ready to assist
            you in making your dream project a reality. Your ideas, our
            expertise - let's build together.
          </p>
          <button>Contact us</button>
        </div>
      </div>
      <div className="links">
        <div className="footer-content">
          <h3>Information</h3>
          <p> <IoLocationSharp/><span>Paris 24</span></p>
          <p><BsFillTelephoneFill/><span>06 00 000 00</span></p>
          <p><IoMdMail/><span>houseniture@contact.com</span></p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="[Your Social Media Link]"><BsFacebook/><span>Facebook</span></a>
            </li>
            <li>
              <a href="[Your Social Media Link]"><AiFillTwitterCircle/><span>Twitter</span></a>
            </li>
            <li>
              <a href="[Your Social Media Link]"><AiFillInstagram/><span>Instagram</span></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 swdev. All rights reserved.</p>
    </div>
      <div className="botom">
        <img src={illustrfooter} alt="" width={"80%"} height={"auto"} />
      </div>
    </div>
  );
};

export default Footer;
