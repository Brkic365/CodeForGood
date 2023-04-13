import React from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "@/styles/NotFound.module.scss";

import { motion } from "framer-motion";

function NotFound() {
  return (
    <main className={styles.main}>
      <Head>
        <title>404 Not Found | Code For Good</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Site Description." />
        <meta property="og:image" content="/images/logo.webp" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <section className={styles.notFound}>
        <section className={styles.graphic}>
          <div className={styles.plugsImg} />
          <div className={styles.circle} />
          <section className={styles.fours}>
            <h1>4</h1>
            <h1>4</h1>
          </section>
        </section>

        <section className={styles.info}>
          <h2>Page Not Found</h2>
          <p>Oops, the page you're looking for doesn't exist!</p>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Go Home
            </motion.button>
          </Link>
        </section>
      </section>
    </main>
  );
}

export default NotFound;
