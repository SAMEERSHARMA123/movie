import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li><a href="#">Company Info</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Help Center</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Account</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Preferences</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FilmHub. All rights reserved.</p>
      </div>
    </footer>
  );
}
