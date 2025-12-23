import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import heroImage from "../../../../assets/aboutUs/service-header-left2.png"; // replace with correct path
import bgGroup from "../../../../assets/aboutUs/Group-bg.png";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";

interface ServiceCard {
  _id?: string;
  title: string;
  description: string;
  masterImage?: string;
}
function Hero() {
  const [cards, setCards] = useState<ServiceCard[]>([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    // Ensure page starts from top when component mounts
    window.scrollTo(0, 0);
    if (window.scrollY > 0) {
      window.scrollTo(0, 0);
    }

    const fetchVisibleServices = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${baseUrl}/services/public`);
        const data = await res.json();

        if (!res.ok)
          throw new Error(data.message || "Failed to fetch services");

        setCards(data.services || []);
      } catch (err: any) {
        toast.error(err?.message || "An error occurred while loading services");
      } finally {
        setLoading(false);
      }
    };

    fetchVisibleServices();
  }, []);

  if (loading) {
    return (
      <div className="loader-overlay">
        <Oval
          height={80}
          width={80}
          color="#007bff"
          secondaryColor="#ccc"
          strokeWidth={4}
          strokeWidthSecondary={2}
          visible
        />
      </div>
    );
  }

  if (cards.length === 0) {
    return (
      <div className="no-results">
        <h3>No Services Found</h3>
      </div>
    );
  }
  return (
    <div className="main-hero">
      <div className="background-img-circle">
        <img src={bgGroup} alt="" />
      </div>
      <div className="hero-container">
        <div className="hero-left">
          <img loading="lazy" src={heroImage} alt="Hero" className="hero-img" />
        </div>
        <div className="hero-right">
          <div className="hero-overlay">
            <h2 className="hero-title">Our Services</h2>
            <p className="hero-subtext hero-subtext-desktop">
              Explore Our Expertise in Personal Financial Planning, Business
              Financing, Retirement, Debt Management, and More.
            </p>
           
          </div>
        </div>
      </div>
      <div className="consultant-slider-container">
        <h2 className="slider-heading">Best Financial Consultant Services</h2>
      </div>

      {/* //card column component  */}

      {/* <div className="card-column">
      {cards.map((card, index) => (
        <div
          className={`card-wrapper ${
            index % 2 !== 0 ? "align-right" : "align-left"
          }`}
          key={index}
        >
          <div className="custom-card">
            <div className="card-left">
              <h2 className="card-title">{card.title}</h2>
              <div className="card-divider" />
              <p className="card-description">{card.description}</p>
              <button className="card-button">Explore More</button>
            </div>
            <div className="card-right">
              <img loading="lazy" src={card.image} alt={card.title} />
            </div>
          </div>
        </div>
      ))}
    </div> */}
      <div className="card-column">
        {cards.map((card, index) => (
          <div
            className={`card-wrapper ${
              index % 2 !== 0 ? "align-right" : "align-left"
            }`}
            key={card._id || index}
          >
            <div className="custom-card">
              <div className="card-left">
                <h2 className="card-title">{card.title || "Untitled"}</h2>
                <div className="card-divider" />
                <p className="card-description">
                  {card.description || "No description available."}
                </p>
                <button
                  className="card-button"
                  onClick={() => navigate(`/servicedetail/${card._id}`)}
                >
                  Explore More
                </button>
              </div>
              <div className="card-right">
                <img
                  loading="lazy"
                  src={
                    card.masterImage ||
                    "https://via.placeholder.com/300x200?text=No+Image"
                  }
                  alt={card.title}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
