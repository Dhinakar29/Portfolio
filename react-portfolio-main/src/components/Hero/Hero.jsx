import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Dhinakaran</h1>
        <h4 className={styles.title1}>Full Stack Developer</h4>
        <p className={styles.description}>
        “Understanding the fundamental working of Intelligence and incorporating them into technology”
        </p>
        <a href="./assets/resume/Dhinakaran k.pdf" className={styles.contactBtn} download>
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/profile2.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
