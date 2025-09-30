import React, { useState } from "react";
import "./style.scss";
import img1 from "../../../../assets/best-financial-1.jpg";
import img2 from "../../../../assets/best-financial-2.jpg";
import img3 from "../../../../assets/best-financial-3.jpg";
import img4 from "../../../../assets/best-financial-4.jpg";
import img5 from "../../../../assets/best-financial-5.jpg";
import circle from "../../../../assets/common/service-cirlce-card.png";
import { FaArrowLeft, FaArrowRight, FaIcons } from "react-icons/fa";
import { ArrowRight, ArrowLeft } from "lucide-react";

const pictures = [
  {
    id: 1,
    src: img1,
    title: "Financial Advisory",
    description:
      "Crafting personalized strategies to protect and grow your wealth.",
  },
  {
    id: 2,
    src: img2,
    title: "Business Financing",
    description: " Access funding solutions that fuel your business growth.",
  },
  {
    id: 3,
    src: img5,
    title: "Retirement Planning",
    description: "Secure your future with comprehensive retirement strategies.",
  },
  {
    id: 4,
    src: img3,
    title: "Debt Management & Credit Advisory",
    description:
      "Get back on track with expert debt consolidation and credit repair services.",
  },
  {
    id: 5,
    src: img4,
    title: "Startup Funding Advisory",
    description:
      "From pitch decks to securing investors, we help startups thrive.",
  },
];

export default function BestFinancial() {
  const [activeId, setActiveId] = useState<null | number>(1); // ❶ who’s open?
  const handlePrev = () => {
    setActiveId((prev: any) => (prev === 1 ? pictures.length : prev - 1));
  };

  const handleNext = () => {
    setActiveId((prev: any) => (prev === pictures.length ? 1 : prev + 1));
  };
  return (
    <div className="best-financial-main">
      <div className="best-upper-part-div">
        <div className="best-heading-div">
          <div className="service-heading">Services</div>

          <div className="best-financial-heading">
            <span>Best Financial</span>
            <span>Consultant Services</span>
          </div>
        </div>

        {/* Arrows container */}
        <div className="arrow-controls">
          <button className="arrow-btn" onClick={handlePrev}>
            <ArrowLeft />
          </button>
          <button className="arrow-btn arrow-btn-next" onClick={handleNext}>
            <ArrowRight />
          </button>
        </div>
      </div>

      <div className="pic-div-best">
        {pictures.map(({ id, src, title, description }) => {
          const isOpen = id === activeId;
          return (
            <button
              key={id}
              className={`pic-1 ${isOpen ? "active" : ""}`}
              style={{ backgroundImage: `url(${src})` }}
              onMouseEnter={() => setActiveId(id)}
              // onMouseLeave={() => setActiveId(null)}
            >
              {/* <img loading="lazy" src={circle} alt="" className="circle-service-card" /> */}
              {isOpen && (
                <div className="detail-box-best-fin">
                  <span>{title}</span>
                  <span>{description}</span>
                  <div className="btn-explore-more">Explore More</div>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
