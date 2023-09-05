import Typewriter from 'typewriter-effect';
import Resume from '../assets/NQW_Resume.pdf';

const Hero = () => {
  const loadResume = () => {
    window.open(Resume, '_blank');
  };

  return (
    <section id="hero-container">
      <h1 id="greet">
        Hello
        <span id="hand-wave">👋</span>
      </h1>
      <h1 className="intro">
        I&apos;m
        <span className="typewriter">
          <Typewriter
            options={{
              strings: ['Keith', 'An Engineer'],
              autoStart: true,
              loop: true,
              pauseFor: 3000,
            }}
          />
        </span>
      </h1>
      <aside className="social-container">
        <a
          href="https://github.com/NQW1105"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/keithnqw"
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
      {/* <a
        href="../assets/NQW_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        My Resume
      </a> */}
    </section>
  );
};

export default Hero;
