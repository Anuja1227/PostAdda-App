import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-div">
      <p>2025 PostAdda. All rights reserved.</p>
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        <a href="/contact">Contact Us</a>
        <a href="/about">About Us</a>
      </div>
    </footer>
  );
}

export default Footer;
