import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PopupModal } from "react-calendly"; // Import Calendly modal
import "./Navbar1.css";
import NavLogo from '../../assets/images/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu
  const [servicesOpen, setServicesOpen] = useState(false); // For Services dropdown
  const [calendlyOpen, setCalendlyOpen] = useState(false); // Calendly modal state

  return (
    <nav className="navbar1">
      {/* Logo */}
      <div className="navlogo-container">
        <Link to="/">
          <img src={NavLogo} alt="Logo" className="Navlogosa" />
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburgers" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <div className={`nav1-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>

        {/* Services Dropdown */}
        <li
          className="services-dropdown"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <Link to="/services">Services</Link>
          {servicesOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/car-oil-change">Car Oil Change</Link></li>
              <li><Link to="/services">Service and Maintenance</Link></li>
              <li><Link to="/brakes">Brakes</Link></li>
              <li><Link to="/steering-suspension">Steering & Suspension</Link></li>
              <li><Link to="/coolant-system">Coolant System</Link></li>
              <li><Link to="/engine-transmission">Engine & Transmission</Link></li>
              <li><Link to="/computer-diagnostics">Computer Diagnostics</Link></li>
              <li><Link to="/ac-heater">AC & Heater</Link></li>
              <li><Link to="/electrical-problems">Electrical Problems</Link></li>
              <li><Link to="/belt-rollers">Belt & Rollers</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/contact">Contact</Link></li>

        {/* Book Appointment Button */}
        <li className="mobile-appointment">
          <button className="appointment-btns" onClick={() => setCalendlyOpen(true)}>
            Book Appointment
          </button>
        </li>
      </div>

      {/* Calendly Popup Modal */}
      <PopupModal 
        url="https://calendly.com/YOUR_CALENDLY_LINK" 
        onModalClose={() => setCalendlyOpen(false)} 
        open={calendlyOpen} 
        rootElement={document.getElementById("root")} 
      />
    </nav>
  );
};

export default Navbar;
