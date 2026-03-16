import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaCalendarAlt, FaSearch,FaGlobe, FaChartLine } from "react-icons/fa"; // icons

function Navbar() {
    const [showSearch, setShowSearch] = useState(false);
  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/">
        <img src="/FRIEND.png" alt="December in Ghana Logo" className="logo" />
      </Link>
    
      {/* Navigation links with icons */}
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
      <div className="search-section">
        <FaSearch
          className="search-icon"
          onClick={() => setShowSearch(!showSearch)}
        />
        {showSearch && (
          <input
            type="text"
            placeholder="Search all Events"
            className="search-input"
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
