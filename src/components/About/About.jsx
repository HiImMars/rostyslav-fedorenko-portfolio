import React from "react";
import css from "./About.module.css";

const About = () => {
  return (
    <section className={css.about} id="about">
      <div className="container">
        <div className={css.textWrapper}>
          <h2 className={css.title}>About me</h2>
          <p className={css.desc}>
            I'm a junior front-end developer skilled in HTML, CSS, JavaScript,
            React, Redux, and TypeScript. I'm passionate about creating dynamic
            and user-friendly web applications. As an aspiring developer, I am
            dedicated to continuous learning and growth within the ever-evolving
            field of web development. Whether it's solving complex problems,
            collaborating with cross-functional teams, or embracing new
            challenges, I approach each project with enthusiasm and a
            determination to deliver high-quality solutions. Let's build
            something amazing together! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
