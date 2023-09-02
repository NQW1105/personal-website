import TechStacks from './TechStacks';

const About = () => {
  return (
    <section id="about-container">
      <h2 id="about">About Me</h2>
      <article>
        Hi, my name is Keith. I&apos;m a self-taught developer with a background
        in chemical engineering. Out of curiosity, I began learning programming
        as I had always had always enjoyed solving problems and building things
      </article>
      <p>Tech stacks that I had worked with :</p>
      <TechStacks />
    </section>
  );
};

export default About;
