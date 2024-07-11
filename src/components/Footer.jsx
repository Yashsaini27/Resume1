
import React from 'react';
import './footer.css';
import './fontAwesome.css'; // Import the FontAwesome CSS file

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">our services</a></li>
                <li><a href="#">privacy policy</a></li>
               
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
              
                <li><Link to ="/career">carrer</Link></li>
                <li><a href="#">Blog</a></li>
              
              </ul>
            </div>
            <div className="footer-col">
              <h4>Query</h4>
              <ul>
                <li><a href="#">Contact Us</a></li>
               
               
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
