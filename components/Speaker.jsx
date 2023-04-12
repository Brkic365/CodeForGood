import React from "react";
import Link from "next/link";
import styles from "@/styles/Speaker.module.scss";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Speaker({ speaker }) {
  return (
    <section className={styles.speaker}>
      <section
        className={styles.imgContainer}
        style={{
          backgroundImage: `url(${process.env.DEV_URL}/images/speakers/${speaker.img}.webp)`,
        }}
      />
      <p>{speaker.name}</p>
      <section className={styles.social}>
        <a href={speaker.social.fb} target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href={speaker.social.ig} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a
          href={speaker.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a href={speaker.social.in} target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
      </section>
    </section>
  );
}

export default Speaker;
