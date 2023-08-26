// TO DO LIST :
// Find cleaner method to iterate the codes

const TechStacks = () => {
  const languages = [
    'devicon-html5-plain-wordmark colored',
    'devicon-css3-plain-wordmark colored',
    'devicon-javascript-plain colored',
    'devicon-git-plain colored',
    'devicon-tailwindcss-plain colored',
    'devicon-bootstrap-plain colored',
    'devicon-sass-original colored',
    'devicon-react-original colored',
    'devicon-firebase-plain-wordmark colored',
    // 'devicon-nodejs-plain colored',
    // 'devicon-express-original',
    // 'devicon-mongodb-plain-wordmark colored',
  ];

  return (
    <aside className="stack-container">
      <div className="stack-slider">
        <ul className="language-list">
          {languages.map((language) => (
            <li key={language} className="language">
              <i className={language}></i>
            </li>
          ))}
        </ul>
        <ul className="language-list">
          {languages.map((language) => (
            <li key={language} className="language">
              <i className={language}></i>
            </li>
          ))}
        </ul>
        {/* <ul className="language-list">
          {languages.map((language) => (
            <li key={language} className="language">
              <i className={language}></i>
            </li>
          ))}
        </ul> */}
      </div>
    </aside>
  );
};

export default TechStacks;
