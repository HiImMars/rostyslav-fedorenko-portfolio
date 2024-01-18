import React from "react";
import css from "./Hero.module.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  const slideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="hero" id="home">
      <div className={`container ${css.heroContainer}`}>
        {/* <div className={css.wrapper}> */}
        <motion.div
          className={css.wrapper}
          initial="hidden"
          animate="visible"
          variants={slideVariants}
        >
          <div className={css.devImageWrapper}>
            <img
              src="/images/dev-photo.png"
              alt="developer"
              className={css.devImage}
            />
          </div>
          <svg
            className={css.svgFirst}
            xmlns="http://www.w3.org/2000/svg"
            width="325"
            height="193"
            viewBox="0 0 325 193"
            data-shape="true"
            aria-hidden="true"
            id="cs-pattern-left"
          >
            <path
              fill="none"
              stroke="#4831d4"
              stroke-miterlimit="50"
              stroke-width="2"
              d="M17.053 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM45.122 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM73.19 9.57a7.891 7.891 0 11-15.781 0 7.891 7.891 0 0115.782 0zM101.26 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM129.329 9.57a7.891 7.891 0 11-15.783 0 7.891 7.891 0 0115.783 0zM238.083 103.963v0l-.561 22.259v0l22.259-.561v0l-.561 22.258v0l22.259-.56v0l-.561 22.258v0l22.259-.56v0l-.559 22.26v0l22.26-.56v0"
            ></path>
          </svg>
          <div className={css.textContainer}>
            <h1 className={css.title}>Front-End Developer</h1>
            <p className={css.description}>
              Hi, I'm Rostyslav Fedorenko, detail-oriented Front-End Developer
              based in Kyiv, Ukraine.
            </p>
            <ul className={css.links}>
              <li>
                <a
                  href="https://www.linkedin.com/in/rostyslav-fedorenko/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className={css.linkedin} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/HiImMars"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className={css.github} />
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
        {/* </div> */}

        <div className={css.techStackContainer}>
          <p className={css.techStackText}>Tech Stack</p>
          <ul className={css.techStackList}>
            <li className={css.techStackItem}>
              <img
                src="https://skillicons.dev/icons?i=html"
                alt="html"
                className={css.image}
              />
            </li>
            <li className={css.techStackItem}>
              <img
                src="https://skillicons.dev/icons?i=css"
                alt="css"
                className={css.image}
              />
            </li>
            <li className={css.techStackItem}>
              <img
                src="https://skillicons.dev/icons?i=js"
                alt="js"
                className={css.image}
              />
            </li>
            <li className={css.techStackItem}>
              <img
                src="https://skillicons.dev/icons?i=ts"
                alt="ts"
                className={css.image}
              />
            </li>
            <li className={css.techStackItem}>
              <img
                src="https://skillicons.dev/icons?i=react"
                alt="react"
                className={css.image}
              />
            </li>
            <li className={css.techStackItem}>
              <img
                src="https://skillicons.dev/icons?i=redux"
                alt="redux"
                className={css.image}
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
