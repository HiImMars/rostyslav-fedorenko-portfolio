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
      <div className={"container"}>
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
