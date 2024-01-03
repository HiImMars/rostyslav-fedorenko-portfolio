import React from "react";
import css from "./Contacts.module.css";
import { MdOutlineMail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";

const Contacts = () => {
  return (
    <section className={css.contacts} id="contacts">
      <div className="container">
        <h2 className={css.title}>Contacts</h2>
        <ul className={css.list}>
          <li className={css.item}>
            <div className={css.iconWrapper}>
              <MdOutlineMail className={css.icon} />
            </div>
            <div className={css.contactWrapper}>
              <h3 className={css.subtitle}>Mail</h3>
              <a
                href="mailto:fedorenkorostyslav@gmail.com"
                target="_blank"
                rel="noreferrer"
                className={css.link}
              >
                fedorenkorostyslav@gmail.com
              </a>
            </div>
          </li>
          <li className={css.item}>
            <div className={css.iconWrapper}>
              <FaTelegramPlane className={css.icon} />
            </div>
            <div className={css.contactWrapper}>
              <h3 className={css.subtitle}>Telegram</h3>
              <a
                href="https://t.me/r1hen7"
                target="_blank"
                rel="noreferrer"
                className={css.link}
              >
                t.me/r1hen7
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contacts;
