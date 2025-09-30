import React from "react";
import map from "../../assets/contact/map.jpg";
import social from "../../assets/contact/Socialaccounts.png";
import phone from "../../assets/contact/phone1.png";
import time from "../../assets/contact/time1.png";
import location from "../../assets/contact/location1.png";
import "./style.scss";

interface FooterProps {
  blueSection?: boolean;
}

function Footer({ blueSection = true }: FooterProps) {
  return (
    <div>
      {blueSection && (
        <div className="consultancy-wrapper">
          <div className="consultancy-left">
            <h2 className="title">Contact Us for the <span className="blue-text">Consultancy</span> </h2>
            <p className="subtitle">
              Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever
            </p>

            <div className="point">
              <img loading="lazy" src={phone} alt="" className="point-icon" />
              <div className="point-text">
                <span className="primary">Requesting A Call</span>
                <span className="secondary">(629) 555-0129</span>
              </div>
            </div>

            <div className="point">
              <img loading="lazy" src={time} alt="" className="point-icon" />
              <div className="point-text">
                <span className="primary">Open Hours:</span>
                <span className="secondary">9am - 8pm</span>
              </div>
            </div>

            <div className="point">
              <img loading="lazy" src={location} alt="" className="point-icon" />
              <div className="point-text">
                <span className="primary">Location:</span>
                <span className="secondary">6391 Elgin St. Celina, Delaware 10299</span>
              </div>
            </div>
          </div>

          {/* Future Enhancement: Add second form here */}
          <div className="consultancy-right">
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="input-group">
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="tel" placeholder="+886 912 345 678" />
              </div>
            </div>

            <div className="input-group address-group">
              <label htmlFor="address">Your Address</label>
              <input
                id="address"
                type="text"
                placeholder="123 Main St, Taipei"
              />
            </div>

            <button className="submit-btn">Send Message</button>
          </div>
        </div>
      )}

      {/* ----- FOOTER ----- */}
      <div className="black-footer">
        <div className="footer-content">
          <div className="footer-section first">
            <div className="text-box">
              <span>Lorem Ipsum</span>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry...
              </div>
            </div>
            <div className="text-box">
              Lorem Ipsum is simply dummy text of the printing
            </div>
          </div>

          <div className="footer-section second">
            <p>Lorem Ipsum is simply dummy text of the printing...</p>
          </div>

          <div className="footer-section third">
            <p className="top-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="button-column">
              <button className="white-btn">White Button</button>
              <button className="blue-btn">Blue Button</button>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <span>© 2025 Your Company</span>
          <span>Lorem Ipsum is simply dummy text of</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
