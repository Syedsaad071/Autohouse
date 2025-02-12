import React, { useState } from "react";
import "./Navbar.css"; // Import CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <img src="./assets/images/logo.png" alt="Logo" className="logo" />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#service">Service</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Appointment Button */}
      <button className="appointment-btn">Book Appointment</button>
    </nav>
  );
};

export default Navbar;
