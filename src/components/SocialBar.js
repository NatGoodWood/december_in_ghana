import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import {FaXTwitter } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";

function SocialBar() {
  return (
    <div className="social-bar">
      {/* Contact section */}
      <div className="contact-section">
        <a href="tel:+233509895044" className="contact">
          <FiPhone className="phone-icon" />
          <span className="phone-number">
            +233 50 989 5044
          </span>
        </a>
      </div>

      {/* Social icons section */}
      <div className="social-icons">
        <a
          href="https://wa.me/233509895044"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon whatsapp"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://twitter.com/decemberingh_"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon twitter"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://instagram.com/decemberingh"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}

export default SocialBar;