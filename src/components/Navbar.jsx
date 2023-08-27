import ReactLogo from '../assets/react.svg';
import { useState, useEffect } from 'react';
import { throttle } from 'lodash';

// TODO LIST
// Include brand logo

const Navbar = () => {
  const [toggleStatus, setToggleStatus] = useState('');

  const toggleNav = () => {
    !toggleStatus ? setToggleStatus('active') : setToggleStatus('');
  };

  const scrollTop = () => {
    // For Safari
    document.body.scrollTop = 0;
    // For Chrome, Firefox, IE and Opera
    document.documentElement.scrollTop = 0;
  };

  function handleScroll() {
    const navbarHeight = document.querySelector('header').offsetHeight;
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let currentSection = '';
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - navbarHeight * 1.5) {
        currentSection = section.id;
      }
    });

    navLinks.forEach((link) => {
      const pathName = link.getAttribute('href').slice(1);
      if (link.classList.contains('active')) {
        link.classList.remove('active');
      }
      if (currentSection.includes(pathName)) {
        link.classList.add('active');
      }
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', throttle(handleScroll), 250);
    return () => {
      window.removeEventListener('scroll', throttle(handleScroll), 250);
    };
  }, []);

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
