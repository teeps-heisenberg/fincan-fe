import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import heroImage from "../../../../assets/aboutUs/service-header-left2.png"; // replace with correct path
import img1 from "../../../../assets/aboutUs/img1.png";
import img2 from "../../../../assets/aboutUs/img2.jpg";
import img3 from "../../../../assets/aboutUs/img3.jpg";
import img4 from "../../../../assets/aboutUs/img1.png";
import img5 from "../../../../assets/aboutUs/img2.jpg";
import img6 from "../../../../assets/aboutUs/img3.jpg";
import bgGroup from "../../../../assets/aboutUs/Group-bg.png";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";
interface CardData {
  title: string;
  description: string;
  image: string;
}

interface ServiceCard {
  _id?: string;
  title: string;
  description: string;
  masterImage?: string;
}
function Hero() {
  const images = [
    { src: img1, detail: "Personal Financial Planning" },
    { src: img2, detail: "Business Financing" },
    { src: img3, detail: "Credit & Debt Advisory" },
    { src: img4, detail: "Startup Funding Advisory" },
    { src: img5, detail: "Estate Planning" },
    { src: img6, detail: "Investment Advice" },
  ];
  // const cards: CardData[] = [
  //   {
  //     title: "Financial Advisory",
  //     description:
  //       "Our IT experts are delivering a range of IT services to our customers and alleviating technology challenges regarding core IT infrastructure. We help you establish a reliable IT infrastructure.",
  //     image: img1,
  //   },
  //   {
  //     title: "Insurance Services",
  //     description:
  //       "Our IT experts are delivering a range of IT services to our customers and alleviating technology challenges regarding core IT infrastructure. We help you establish a reliable IT infrastructure.",
  //     image: img2,
  //   },
  //   {
  //     title: "Management Consultancy",
  //     description:
  //       "Our IT experts are delivering a range of IT services to our customers and alleviating technology challenges regarding core IT infrastructure. We help you establish a reliable IT infrastructure.",
  //     image: img3,
  //   },
  //   {
  //     title: "Retirement Planning",
  //     description:
  //       "Our IT experts are delivering a range of IT services to our customers and alleviating technology challenges regarding core IT infrastructure. We help you establish a reliable IT infrastructure.",
  //     image: img4,
  //   },
  //   {
  //     title: "Bussiness services",
  //     description:
  //       "Our IT experts are delivering a range of IT services to our customers and alleviating technology challenges regarding core IT infrastructure. We help you establish a reliable IT infrastructure.",
  //     image: img3,
  //   },
  // ];
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth / 1.2;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleCardClick = (index: number) => {
    // Only apply click-to-expand on mobile (width <= 768px)
    if (window.innerWidth <= 768) {
      setActiveCardIndex(index);
      if (sliderRef.current) {
        const card = sliderRef.current.children[index] as HTMLElement;
        if (card) {
          const cardLeft = card.offsetLeft;
          const cardWidth = card.offsetWidth;
          const containerWidth = sliderRef.current.offsetWidth;
          const scrollPosition = cardLeft - (containerWidth / 2) + (cardWidth / 2);
          
          sliderRef.current.scrollTo({
            left: scrollPosition,
            behavior: "smooth",
          });
        }
      }
    }
  };
  const [cards, setCards] = useState<ServiceCard[]>([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    // Ensure page starts from top when component mounts
    window.scrollTo(0, 0);
    // Additional mobile fix
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
            <p className="hero-subtext hero-subtext-mobile">
              We Provide Perfect IT Solutions For Your Business
            </p>
          </div>
        </div>
      </div>
      <div className="consultant-slider-container">
        <h2 className="slider-heading">Best Financial Consultant Services</h2>

        <div className="slider-wrapper">
          <button className="arrow left" onClick={() => scroll("left")}>
            &#10094;
          </button>

          <div className="slider" ref={sliderRef}>
            {images.map((img, idx) => (
              <div 
                className={`slider-item ${idx === activeCardIndex ? 'active' : ''}`} 
                key={idx}
                onClick={() => handleCardClick(idx)}
              >
                <img
                  loading="lazy"
                  className="slider-img"
                  src={img.src}
                  alt={`slide-${idx}`}
                />
                <div className="overlay-consultant">
                  <p className="text-slider-detail">{img.detail}</p>
                  <div className="line-slider" />
                </div>
              </div>
            ))}
          </div>

          <button className="arrow right" onClick={() => scroll("right")}>
            &#10095;
          </button>
        </div>
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
