// import HandWave from '../assets/waving-hand.svg';

// TO DO
// Consider use JS package for typewriter effect

const Hero = () => {
  const loadResume = () => {
    window.open('./src/assets/FakeResume.pdf', '_blank');
  };

  return (
    <section id="hero-container">
      <h1 id="greet">
        Hello
        <span id="hand-wave">👋</span>
      </h1>
      <h1 className="intro">
        I&apos;m
        <span id="name">Keith</span>
        <span id="job">An Engineer</span>
      </h1>
      <aside className="social-container">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="mailto:neoqw@hotmail.com" className="social-link">
          <i className="fa-solid fa-envelope"></i>
        </a>
      </aside>
      <button className="btn" onClick={loadResume}>
        My Resume
      </button>
    </section>
  );
};

export default Hero;
