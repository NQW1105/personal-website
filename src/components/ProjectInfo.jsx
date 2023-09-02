import gainzIcon from '../assets/favicon.ico';
import projectImg from '../assets/project-img1.png';

// TO DO
// Project img scroll as demo
// hover effect on project img... show tech stack
// Responsive image tag/loading

const ProjectInfo = () => {
  // Name, description, github and demo link
  // E-commerce store that sells bodybuilding supplements.
  return (
    <div className="project-card">
      <a
        href="https://e-commerce-7887d.web.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="project-img-link"
      >
        <img src={projectImg} alt="" className="project-img" />
      </a>
      <h3 className="project-title">
        Gainz{' '}
        <img src={gainzIcon} alt="project-icon" className="project-icon" />
      </h3>
      <p>
        Responsive e-commerce store that sells bodybuilding supplements.
        Firebase features implemented were user authentication, database query
        and stripe extension to process payments.
      </p>
      <a
        href="https://github.com/NQW1105/e-commerce"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link github"
      >
        Code <i className="fa-brands fa-github"></i>
      </a>
      <a
        href="https://e-commerce-7887d.web.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link demo"
      >
        Live Demo{' '}
        <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i>
      </a>
    </div>
  );
};

export default ProjectInfo;
