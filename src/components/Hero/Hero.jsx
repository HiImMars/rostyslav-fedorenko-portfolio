import React, { useEffect, useState } from "react";
import css from "./Hero.module.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  const [shouldRenderSvg, setShouldRenderSvg] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShouldRenderSvg(window.innerWidth > 767);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        <svg
          className={css.rectangle}
          version="1.1"
          id="_x32_"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="none"
          stroke="rgb(209, 255, 109)"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <style type="text/css"> </style>
            <g>
              <rect class="st0" width="112" height="112"></rect>
              <rect
                x="200.008"
                class="st0"
                width="111.984"
                height="112"
                stroke-width="4"
              ></rect>
              <rect
                x="400"
                class="st0"
                width="112"
                height="112"
                stroke-width="4"
              ></rect>
              <rect
                y="200.008"
                class="st0"
                width="112"
                height="111.984"
                stroke-width="4"
              ></rect>
              <rect
                x="200.008"
                y="200.008"
                class="st0"
                width="111.984"
                height="111.984"
                stroke-width="4"
              ></rect>
              <rect
                x="400"
                y="200.008"
                class="st0"
                width="112"
                height="111.984"
                stroke-width="4"
              ></rect>
              <rect class="st0" y="400" width="112" height="112"></rect>
              <rect
                x="200.008"
                y="400"
                class="st0"
                width="111.984"
                height="112"
                stroke-width="4"
              ></rect>
              <rect
                x="400"
                y="400"
                class="st0"
                width="112"
                height="112"
                stroke-width="4"
              ></rect>
            </g>
          </g>
        </svg>

        {shouldRenderSvg && (
          <>
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

            <svg
              className={css.svgSecond}
              xmlns="http://www.w3.org/2000/svg"
              width="325"
              height="193"
              viewBox="0 0 325 193"
              data-shape="true"
              aria-hidden="true"
              id="cs-pattern-left"
            >
              <circle
                fill="none"
                stroke="#4831d4"
                stroke-miterlimit="50"
                stroke-width="2"
                cx="30"
                cy="30"
                r="20"
              ></circle>
              <rect
                fill="none"
                stroke="#4831d4"
                stroke-miterlimit="50"
                stroke-width="2"
                x="70"
                y="10"
                width="40"
                height="40"
              ></rect>
              <ellipse
                fill="none"
                stroke="#4831d4"
                stroke-miterlimit="50"
                stroke-width="2"
                cx="120"
                cy="30"
                rx="25"
                ry="15"
              ></ellipse>
              <line
                fill="none"
                stroke="#4831d4"
                stroke-miterlimit="50"
                stroke-width="2"
                x1="160"
                y1="10"
                x2="200"
                y2="50"
              ></line>
              <polygon
                fill="none"
                stroke="#4831d4"
                stroke-miterlimit="50"
                stroke-width="2"
                points="220,10 260,10 240,50"
              ></polygon>
              <path
                fill="none"
                stroke="#4831d4"
                stroke-miterlimit="50"
                stroke-width="2"
                d="M280,10 Q290,5 300,10 T320,30"
              ></path>
            </svg>
          </>
        )}

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
            <li className={css.techStackItem}>
              <img
                src="https://skillicons.dev/icons?i=mui"
                alt="mui"
                className={css.image}
              />
            </li>
            <li className={css.techStackItem}>
              <img
                src="https://skillicons.dev/icons?i=tailwind"
                alt="tailwind"
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
