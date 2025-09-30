import React from 'react';
import './Header.scss'; // Assuming SCSS for styling
import { Link, Navigate,useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo3.png'
const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <img loading="lazy" src={logo} alt="logo" className='logo' onClick={() => {navigate('/')}}/>

      <nav className="nav">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">Our Team</Link>
        <Link to="/services" className="nav-item">Services</Link>
        <Link to="/casestudy" className="nav-item">Success stories</Link>
        <Link to='/contactus'>
            <button className="action-btn" >
      <span className="btn-label">Contact Us</span>
    </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
