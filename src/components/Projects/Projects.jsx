import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import css from "./Projects.module.css";

const Projects = () => {
  return (
    <section>
      <div className="container">
        <h2 className={css.title}>Projects</h2>
        <ul className={css.projectList}>
          <li className={css.projectItem}>
            <img
              src="/images/admin-dashboard-image.png"
              alt="project screenshot"
              className={css.projectScreenshot}
            />
            <div className={css.descriptionWrapper}>
              <h3 className={css.projectName}>Adminsys</h3>
              <p className={css.projectDescription}>
                This user-friendly dashboard provides a seamless experience for
                administrators, offering intuitive navigation, customizable
                widgets, and a sleek design. Take control of your data
                visualization and streamline administrative tasks effortlessly
                with our powerful and responsive solution.
              </p>
              <ul className={css.techUsedIconsList}>
                <li className={css.techUsedIconItem}>
                  <img
                    src="https://skillicons.dev/icons?i=react"
                    alt="react"
                    className={css.image}
                  />
                </li>
                <li className={css.techUsedIconItem}>
                  <img
                    src="https://skillicons.dev/icons?i=materialui"
                    alt="mui"
                    className={css.image}
                  />
                </li>
              </ul>
              <ul className={css.linksList}>
                <li className={css.linkItem}>
                  <a
                    href="https://github.com/HiImMars/admin-dashboard"
                    rel="noreferrer"
                    target="_blank"
                    className={css.link}
                  >
                    Code
                    <FaGithub />
                  </a>
                </li>
                <li className={css.linkItem}>
                  <a
                    href="https://hiimmars.github.io/admin-dashboard/"
                    rel="noreferrer"
                    target="_blank"
                    className={css.link}
                  >
                    Live Demo
                    <BiLinkExternal />
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
