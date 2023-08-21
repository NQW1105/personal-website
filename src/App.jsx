import './App.scss';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer id="footer-container">
        <p className="footer-text">2023 @ Developed by KeithNQW</p>
      </footer>
    </>
  );
}

export default App;
