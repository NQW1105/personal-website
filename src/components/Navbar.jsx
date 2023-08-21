import ReactLogo from '../assets/react.svg';
import { useState } from 'react';

// TODO LIST
// Highlight when selected (react-router etc)
// Include brand logo

const Navbar = () => {
  const [toggleStatus, setToggleStatus] = useState('');

  const scrollTop = () => {
    // For Safari
    document.body.scrollTop = 0;
    // For Chrome, Firefox, IE and Opera
    document.documentElement.scrollTop = 0;
  };

  const toggleNav = () => {
    // console.log(!toggleStatus);
    !toggleStatus ? setToggleStatus('active') : setToggleStatus('');
  };

  return (
    <header className="navbar">
      <div>
        <img
          src={ReactLogo}
          alt="brand-logo"
          className="logo"
          onClick={scrollTop}
        />
        <a className="toggle-btn" onClick={toggleNav}>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </a>
      </div>
      <nav className={toggleStatus}>
        <ul className="nav-links">
          <li>
            <a href="#about" className="section-link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="section-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="section-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
