import React from "react";
import css from "./Footer.module.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={`container ${css.footerWrapper}`}>
        <p className={css.text}>Copyright ©2024. All rights reserved</p>
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
    </footer>
  );
};

export default Footer;
