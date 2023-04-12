import React from "react";
import styles from "@/styles/NewsletterInput.module.scss";

import { HiArrowSmallRight } from "react-icons/hi2";

import { motion } from "framer-motion";

function NewsletterInput() {
  return (
    <section className={styles.newsletterInput}>
      <input placeholder="Your e-mail address" type="email" />
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        Subscribe
        <HiArrowSmallRight />
      </motion.button>
    </section>
  );
}

export default NewsletterInput;
