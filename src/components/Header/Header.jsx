import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import css from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navlinks = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contacts",
      link: "#contacts",
    },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSmoothScroll = (event, link = "#home") => {
    event.preventDefault();

    const targetElement = document.querySelector(link);
    window.scrollTo({
      top:
        targetElement.offsetTop - document.querySelector("header").offsetHeight,
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <header className={css.header}>
      <div className="container">
        <nav className={css.nav}>
          <a
            href="#home"
            className={css.name}
            onClick={(event) => handleSmoothScroll(event)}
          >
            Rostyslav
          </a>

          {/* Burger Menu Button */}
          <div className={css.burgerMenu} onClick={toggleMenu}>
            <FaBars />
          </div>

          {/* Navigation Links */}
          <ul className={`${css.list} ${menuOpen && css.open}`}>
            {navlinks.map((item, idx) => (
              <li key={idx} className={css.item}>
                <a
                  href={item.link}
                  className={css.link}
                  onClick={(event) => handleSmoothScroll(event, item.link)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
