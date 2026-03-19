import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaCalendarAlt, FaSearch,FaGlobe, FaChartLine } from "react-icons/fa"; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link to="/">
          <img src="/FRIEND.png" alt="December in Ghana Logo" className="logo" />
        </Link>

        <div className="footer-section">
        
          <h4>Quick Links</h4>
          <ul className="nav-links">
                  <li>
                    <Link to="/" className="nav-item">
                      <FaHome className="nav-icon" /> Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="nav-item">
                      <FaInfoCircle className="nav-icon" /> About
                    </Link>
                  </li>
                  <li>
                    <Link to="/events" className="nav-item">
                      <FaCalendarAlt className="nav-icon" /> Events
                    </Link>
                  </li>
                  <li>
                    <Link to="/tourism" className="nav-item">
                      <FaGlobe className="nav-icon" /> Tourism
                    </Link>
                  </li>
                  <li>
                    <Link to="/investment" className="nav-item">
                      <FaChartLine className="nav-icon" /> Investment
                    </Link>
                  </li>
                </ul>
        </div>

        {/* Right: Contact & Social */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@decemberinghana.org</p>
          <p>Accra, Ghana</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">🌐 Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🌐 Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">🌐 Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} December in Ghana. All rights reserved.</p>
        <p>© {new Date().getFullYear()} Developed by Paca Wood Services.</p>
      </div>
    </footer>
  );
}

export default Footer;