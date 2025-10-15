import React from "react";
import "./teamMemberCard.scss";
import facebook from "../../assets/aboutUs/team/fb.png";
import instagram from "../../assets/aboutUs/team/instagram.png";
import twitter from "../../assets/aboutUs/team/twitter.png";

// import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

interface TeamMemberCardProps {
  id: string; //
  image?: string;
  name: string;
  role: string;
  bio?: string;
  description?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  twitterUrl?: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  image,
  name,
  role,
  bio,
  description = "There are many variations of passages of Lorem Ipsum available. There are many variations of passages of Lorem Ipsum available. There are many variations of passages of Lorem Ipsum available. There are many variations of passages of Lorem Ipsum available.",
  facebookUrl = "https://facebook.com/",
  instagramUrl = "https://instagram.com/",
  twitterUrl = "https://twitter.com/",
}) => {
  return (
    <div className="team-card">
      {/* Default card layout */}
      <div className="team-card__default">
        <img
          src={image || "/fallback.png"}
          alt={name}
          className="team-card__image"
        />
        <div className="team-card__info">
          <h3 className="team-card__name">{name}</h3>
          <p className="team-card__designation">{role}</p>
          <p className="team-card__description">{bio}</p>
          <div className="team-card__socials">
            {facebookUrl && (
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" />
              </a>
            )}
            {instagramUrl && (
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" />
              </a>
            )}
            {twitterUrl && (
              <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="Twitter" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Expanded hover layout */}
      <div className="team-card__expanded">
        <div className="team-card__expanded-content">
          <div className="team-card__expanded-left">
            <img
              src={image || "/fallback.png"}
              alt={name}
              className="team-card__expanded-image"
            />
          </div>
          <div className="team-card__expanded-right">
            <p className="team-card__expanded-description">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;

// import React from 'react';
// import './teamMemberCard.scss';
// import facebook from '../../assets/aboutUs/team/fb.png'
// import instagram from '../../assets/aboutUs/team/instagram.png'
// import twitter from '../../assets/aboutUs/team/twitter.png'

// // import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

// interface TeamMemberCardProps {
//   image: string;
//   name: string;
//   designation: string;
//   description: string;
//   facebookUrl?: string;
//   instagramUrl?: string;
//   twitterUrl?: string;
// }

// const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
//   image,
//   name,
//   designation,
//   description,
//   facebookUrl,
//   instagramUrl,
//   twitterUrl,
// }) => {
//   return (
//     <div className="team-card">
//       <img src={image} alt={name} className="team-card__image" />
//       <div className="team-card__info">
//         <h3 className="team-card__name">{name}</h3>
//         <p className="team-card__designation">{designation}</p>
//         <p className="team-card__description">{description}</p>
//         <div className="team-card__socials">
//           {facebookUrl && (
//             <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
//               {/* <FaFacebookF /> */}
//               <img src={facebook} alt="" />
//             </a>
//           )}
//           {instagramUrl && (
//             <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
//               {/* <FaInstagram /> */}
//               <img src={instagram} alt="" />
//             </a>
//           )}
//           {twitterUrl && (
//             <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
//               {/* <FaTwitter /> */}
//               <img src={twitter} alt="" />
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamMemberCard;
