import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Oval } from "react-loader-spinner";
import "./style.scss";
import Header from "../../components/Header";

// Image imports
import map from "../../assets/contact/map.jpg";
import social from "../../assets/contact/Socialaccounts.png";
import phone from "../../assets/contact/phone.png";
import time from "../../assets/contact/time.png";
import location from "../../assets/contact/location.png";
import Footer from "../../components/Footer";

export default function ContactUs() {
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    serviceType: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Submit handler
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { fullName, email, phone, message, serviceType } = formData;

    if (!fullName || !email || !phone || !message || !serviceType) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsLoading(true);

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const res = await fetch(`${baseUrl}/user-inquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      toast.success("Your message has been sent!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
        serviceType: "",
      });
    } catch (err) {
      console.error("Error:", err);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={4000} />
      <Header />
      {/* Full-screen loader when loading */}
      {isLoading && (
        <div className="loader-overlay">
          <Oval
            height={80}
            width={80}
            color="#007bff"
            secondaryColor="#ccc"
            strokeWidth={4}
            strokeWidthSecondary={2}
            visible={true}
          />
        </div>
      )}
      <section className="contact-section">
        {/* Mobile: Title at top */}
        <div className="mobile-title">
          <h2>Contact us For the Consultancy</h2>
          <p>Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever</p>
        </div>

        {/* ------- LEFT INFO (Desktop) --------- */}
        <div className="contact-info">
          <h2 className="info-title">Get In Touch with FinCan Solutions</h2>
          <h4 className="info-subtitle">
            Ready to take control of your financial future?
            <br /> We're here to help.
          </h4>
          {/* Address removed from desktop view */}
        </div>

        {/* ------- RIGHT FORM -------- */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          {/* NEW SERVICE TYPE DROPDOWN */}
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
            className="input-like"
          >
            <option value="" disabled>
              Select a Service
            </option>
            <option value="Retirement Planning">Retirement Planning</option>
            <option value="Management Consultancy">
              Management Consultancy
            </option>
            <option value="Insurance Services">Insurance Services</option>
            <option value="Financial Advisory">Financial Advisory</option>
            <option value="Custom Request">Custom Request</option>
          </select>
          <button type="submit" disabled={isLoading}>
            Submit
          </button>
        </form>

        {/* Mobile: Address at bottom */}
        <div className="mobile-address">
          <p className="address-text">
            10700 ACADEMY RD NE, ALBUQUERQUE,<br />
            NEW YORK , UNITED STATES<br />
            (505) 299-5051
          </p>
        </div>
      </section>

      {/* ----- MAP + SOCIAL ----- */}
      <div className="below-blue-section">
        <div className="left-image">
          <img loading="lazy" src={map} alt="Case Study" className="map" />
          <div className="social-div">
            <img loading="lazy" src={social} alt="social" className="social" />
          </div>
        </div>
        <div className="right-content"></div>
      </div>
      <Footer blueSection={false} />
      {/* ----- CONSULTANCY SECTION ----- */}
      {/* <div className="consultancy-wrapper">
        <div className="consultancy-left">
          <h2 className="title">Contact Us for the Consultancy</h2>
          <p className="subtitle">
            We’re here to answer questions and guide you every step of the way.
          </p>

          <div className="point">
            <img loading="lazy" src={phone} alt="" className="point-icon" />
            <div className="point-text">
              <span className="primary">Fast Response</span>
              <span className="secondary">Within 24 hours</span>
            </div>
          </div>

          <div className="point">
            <img loading="lazy" src={time} alt="" className="point-icon" />
            <div className="point-text">
              <span className="primary">Expert Advice</span>
              <span className="secondary">Certified consultants</span>
            </div>
          </div>

          <div className="point">
            <img loading="lazy" src={location} alt="" className="point-icon" />
            <div className="point-text">
              <span className="primary">Tailored Plans</span>
              <span className="secondary">For every budget</span>
            </div>
          </div>
        </div>

       
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
            <input id="address" type="text" placeholder="123 Main St, Taipei" />
          </div>

          <button className="submit-btn">Send Message</button>
        </div>
      </div> */}

      {/* ----- FOOTER ----- */}
      {/* <div className="black-footer">
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
      </div> */}
    </>
  );
}
