import React from "react";
import css from "./About.module.css";
import { motion } from "framer-motion";

const About = () => {
  const rightSlide = {
    hidden: {
      opacity: 0,
      x: -100, // right
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const leftSlide = {
    hidden: {
      opacity: 0,
      x: 100, // left
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className={css.about} id="about">
      <div className="container">
        <div className={css.contentWrapper}>
          {/* <div className={css.textWrapper}> */}
          <motion.div
            className={css.textWrapper}
            initial="hidden"
            animate="visible"
            variants={rightSlide}
          >
            <h2 className={css.title}>About me</h2>
            <p className={css.desc}>
              I'm a junior front-end developer skilled in HTML, CSS, JavaScript,
              React, Redux, and TypeScript. I'm passionate about creating
              dynamic and user-friendly web applications. As an aspiring
              developer, I am dedicated to continuous learning and growth within
              the ever-evolving field of web development. Whether it's solving
              complex problems, collaborating with cross-functional teams, or
              embracing new challenges, I approach each project with enthusiasm
              and a determination to deliver high-quality solutions. Let's build
              something amazing together! 🚀
            </p>
          </motion.div>
          {/* </div> */}
          <motion.div
            className={css.image}
            initial="hidden"
            animate="visible"
            variants={leftSlide}
          >
            <img
              src="/images/about-me.png"
              alt="about me"
              className={css.image}
              width="300px"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
