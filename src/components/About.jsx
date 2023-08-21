import TechStacks from './TechStacks';

const About = () => {
  return (
    <section id="about-container">
      <h2 id="about">About Me</h2>
      <article>
        Hi, my name is Keith. I&apos;m a self-taught developer. I began learning
        programming out of curiosity as I had always enjoyed building and
        tinkering creative solutions.
      </article>
      <p>Tech stacks that I had worked with :</p>
      <TechStacks />
    </section>
  );
};

export default About;
