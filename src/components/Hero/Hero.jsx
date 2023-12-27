import React from "react";
import css from "./Hero.module.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <div className={"container"}>
        <div className={css.wrapper}>
          <div className={css.textContainer}>
            <h1 className={css.title}>Front-End Developer</h1>
            <p className={css.description}>
              Hi, I'm Rostyslav Fedorenko, detail-oriented Front-End Developer
              based in Kyiv, Ukraine.
            </p>
            <ul className={css.links}>
              <li>
                <a href="https://www.linkedin.com/in/rostyslav-fedorenko/">
                  <FaLinkedin className={css.linkedin} />
                </a>
              </li>
              <li>
                <a href="https://github.com/HiImMars">
                  <FaGithub className={css.github} />
                </a>
              </li>
            </ul>
          </div>
          <div className={css.devImageWrapper}>
            <img
              src="/images/me.jpg"
              alt="developer"
              className={css.devImage}
            />
          </div>
        </div>

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
