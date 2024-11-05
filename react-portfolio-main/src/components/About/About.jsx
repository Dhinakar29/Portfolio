import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/about1.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>
              Experienced full-stack developer specializing in building robust and scalable web applications.
              Proficient in front-end technologies such as HTML, CSS, JavaScript, and React. 
              Skilled in back-end development using Node.js, Express.js, and MongoDB. 
              Adept at database design and optimization, as well as API development and integration. 
              Passionate about writing clean, maintainable code and delivering exceptional user experiences.
              </p>
            </div>
          </li>
          
          
        </ul>
      </div>
    </section>
  );
};
