import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import css from "./Projects.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Projects = () => {
  return (
    <section className={css.projects} id="projects">
      <div className="container">
        <h2 className={css.title}>Projects</h2>
        <ul className={css.projectList}>
          {/* 1 */}
          <li className={css.projectItem} data-aos="fade-right">
            <a
              href="https://hiimmars.github.io/admin-dashboard/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/admin-dashboard-image.png"
                alt="project screenshot"
                className={css.projectScreenshot}
              />
            </a>

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
                  <p className={css.techUsedText}>React</p>
                </li>
                <li className={css.techUsedIconItem}>
                  <p className={css.techUsedText}>Redux Toolkit</p>
                </li>
                <li className={css.techUsedIconItem}>
                  <p className={css.techUsedText}>Material UI</p>
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
          {/* 2 */}
          <li className={css.projectItem} data-aos="fade-left">
            <div className={css.descriptionWrapper}>
              <h3 className={css.projectName}>CryptoVerse</h3>
              <p className={css.projectDescription}>
                Stay informed and empowered in the dynamic world of
                cryptocurrencies. Explore the latest news, insights, and
                detailed information about various cryptocurrencies. From market
                trends to in-depth analyses, our platform is your go-to resource
                for staying ahead in the fast-paced crypto landscape.
              </p>
              <ul className={css.techUsedIconsList}>
                <li className={css.techUsedIconItem}>
                  <p className={css.techUsedText}>React</p>
                </li>
                <li className={css.techUsedIconItem}>
                  <p className={css.techUsedText}>RTK Query</p>
                </li>
                <li className={css.techUsedIconItem}>
                  <p className={css.techUsedText}>Ant Design</p>
                </li>
              </ul>
              <ul className={css.linksList}>
                <li className={css.linkItem}>
                  <a
                    href="https://github.com/HiImMars/cryptoapp"
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
                    href="https://cryptoversebrowser.netlify.app/"
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
            <a
              href="https://cryptoversebrowser.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/cryptoverse.png"
                alt="project screenshot"
                className={css.projectScreenshot}
              />
            </a>
          </li>
          {/* 3 */}
          <li className={css.projectItem} data-aos="fade-right">
            <a
              href="https://natalikoyani.github.io/Team_10/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/tasty-treats.png"
                alt="project screenshot"
                className={css.projectScreenshot}
              />
            </a>

            <div className={css.descriptionWrapper}>
              <h3 className={css.projectName}>Tasty Treats</h3>
              <p className={css.projectDescription}>
                Tasty Treats seamlessly combines the joy of discovering and
                saving diverse cooking recipes with the convenience of ordering
                step-by-step cooking guide videos. Explore an extensive
                collection of delicious recipes, save your favorites, and
                enhance your culinary skills with expertly crafted video guides.
              </p>
              <ul className={css.techUsedIconsList}>
                <li className={css.techUsedIconItem}>
                  <p className={css.techUsedText}>HTML</p>
                </li>
                <li className={css.techUsedIconItem}>
                  <p className={css.techUsedText}>CSS</p>
                </li>
                <li className={css.techUsedIconItem}>
                  <p className={css.techUsedText}>JavaScript</p>
                </li>
              </ul>
              <ul className={css.linksList}>
                <li className={css.linkItem}>
                  <a
                    href="https://github.com/natalikoyani/Team_10"
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
                    href="https://natalikoyani.github.io/Team_10/"
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
          {/* 4 */}
          <li className={css.projectItem} data-aos="fade-left">
            <div className={css.descriptionWrapper}>
              <h3 className={css.projectName}>Simply Chocolate</h3>
              <p className={css.projectDescription}>
                Discover a delectable assortment of high-quality chocolates,
                learn about our artisanal crafting process, and conveniently
                order your favorite treats online. Immerse yourself in the rich
                flavors and luxurious textures of our decadent creations, all
                from the comfort of your home.
              </p>
              <ul className={css.techUsedIconsList}>
                <li className={css.techUsedIconItem}>
                  <p className={css.techUsedText}>HTML</p>
                </li>
                <li className={css.techUsedIconItem}>
                  <p className={css.techUsedText}>CSS</p>
                </li>
                <li className={css.techUsedIconItem}>
                  <p className={css.techUsedText}>JavaScript</p>
                </li>
              </ul>
              <ul className={css.linksList}>
                <li className={css.linkItem}>
                  <a
                    href="https://github.com/TanyaJulieva/project-CodeLovers23"
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
                    href="https://tanyajulieva.github.io/project-CodeLovers23/"
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
            <a
              href="https://tanyajulieva.github.io/project-CodeLovers23/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/simply-chocolate.png"
                alt="project screenshot"
                className={css.projectScreenshot}
              />
            </a>
          </li>
          {/* 5 */}
          <li className={css.projectItem} data-aos="fade-right">
            <a
              href="https://hiimmars.github.io/goit-markup-hw-07/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/webstudio.png"
                alt="project screenshot"
                className={css.projectScreenshot}
              />
            </a>

            <div className={css.descriptionWrapper}>
              <h3 className={css.projectName}>WebStudio</h3>
              <p className={css.projectDescription}>
                Welcome to WebStudio, your go-to destination for cutting-edge
                web development solutions. Explore our portfolio, showcasing a
                diverse range of projects that exemplify our commitment to
                innovation and excellence. Partner with us for a seamless
                journey from concept to reality.
              </p>
              <ul className={css.techUsedIconsList}>
                <li className={css.techUsedIconItem}>
                  <p className={css.techUsedText}>HTML</p>
                </li>
                <li className={css.techUsedIconItem}>
                  <p className={css.techUsedText}>CSS</p>
                </li>
              </ul>
              <ul className={css.linksList}>
                <li className={css.linkItem}>
                  <a
                    href="https://github.com/HiImMars/goit-markup-hw-07"
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
                    href="https://hiimmars.github.io/goit-markup-hw-07/"
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
        </ul>
      </div>
    </section>
  );
};

export default Projects;
