import React from "react";
import map from "../../assets/contact/map.jpg";
import social from "../../assets/contact/Socialaccounts.png";
import phone from "../../assets/contact/phone1.png";
import time from "../../assets/contact/time1.png";
import location from "../../assets/contact/location1.png";
import logo from "../../assets/footer.png";
import facebookIcon from "../../assets/aboutUs/team/fb.png";
import instagramIcon from "../../assets/aboutUs/team/instagram.png";
import twitterIcon from "../../assets/aboutUs/team/twitter.png";
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
            <h2 className="title">Contact us For the <span className="blue-text">Consultancy</span></h2>
            <p className="subtitle">
              Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever
            </p>

            <div className="points-container">
              <div className="point">
                <img loading="lazy" src={time} alt="" className="point-icon" />
                <div className="point-text">
                  <span className="primary">Open Hours:</span>
                  <span className="secondary">9 am - 8 pm</span>
                </div>
              </div>

              <div className="point">
                <img loading="lazy" src={phone} alt="" className="point-icon" />
                <div className="point-text">
                  <span className="primary">Requesting A Call:</span>
                  <span className="secondary">(629) 555-0129</span>
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
          </div>

          {/* Contact Form */}
          <div className="consultancy-right">
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="name">NAME</label>
                <input id="name" type="text" placeholder="" />
              </div>
              <div className="input-group">
                <label htmlFor="lastname">LAST NAME</label>
                <input id="lastname" type="text" placeholder="" />
              </div>
            </div>

            <div className="input-group email-group">
              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                type="email"
                placeholder=""
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
            <div className="footer-logo">
              <img loading="lazy" src={logo} alt="FinCan Logo" className="logo" />
            </div>
            <div className="footer-description">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley
            </div>
          </div>

          <div className="footer-section second">
            <div className="footer-column">
              <h4>Lorem Ipsum</h4>
              <p>Lorem Ipsum</p>
              <p>Is Simply Dum</p>
              <p>Text Of The</p>
              <p>Printing</p>
            </div>
          </div>

          <div className="footer-section third">
            <div className="footer-column">
              <h4>Lorem Has</h4>
              <p>Lorem Ipsum</p>
              <p>Is Simply Dum</p>
              <p>Text Of The</p>
              <p>Printing</p>
            </div>
          </div>
        </div>

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img loading="lazy" src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img loading="lazy" src={twitterIcon} alt="Twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img loading="lazy" src={instagramIcon} alt="Instagram" />
          </a>
        </div>

        <hr className="footer-divider" />
      </div>
    </div>
  );
}

export default Footer;
