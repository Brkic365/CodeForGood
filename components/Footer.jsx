import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "@/styles/Footer.module.scss";

import {
  FaInstagram,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <section className={styles.content}>
          <section className={styles.logoHolder}>
            <Image
              src="/images/logo.png"
              alt="CFG logo"
              width={192}
              height={49.69}
              layout="responsive"
              objectFit="contain"
              priority
            />
          </section>

          <section className={styles.categories}>
            <section className={styles.category}>
              <h5>LINKS</h5>
              <ul>
                <li>
                  <Link href="/#about">About CFG</Link>
                </li>
                <li>
                  <Link href="/#speakers">Speakers</Link>
                </li>
                <li>
                  <Link href="/#sponsors">Sponsors</Link>
                </li>
                <li>
                  <Link href="/#prizes">Prizes</Link>
                </li>
                <li>
                  <Link href="/#tickets">Get Tickets</Link>
                </li>
                <li>
                  <Link href="/#contact">Contact Us</Link>
                </li>
              </ul>
            </section>

            <section className={styles.category}>
              <h5>CONTACT US</h5>
              <ul>
                <li>
                  <FaEnvelope />
                  <Link href="mailto:info@polyminds.tech">
                    info@polyminds.tech
                  </Link>
                </li>
                <li>
                  <FaInstagram />
                  <Link
                    href="https://instagram.com/polyminds"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @polyminds
                  </Link>
                </li>
                <li>
                  <FaTwitter />
                  <Link
                    href="https://twitter.com/MindsPoly"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @MindsPoly
                  </Link>
                </li>
                <li>
                  <FaFacebookF />
                  <Link
                    href="https://www.facebook.com/people/Polyminds/100087741548596/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Polyminds
                  </Link>
                </li>
              </ul>
            </section>

            <section className={styles.category}>
              <h5>OUR POLICIES</h5>
              <ul>
                <li>
                  <Link href="/privacy-policy">Privacy policy</Link>
                </li>
                <li>
                  <Link href="/terms-of-service">Terms of Service</Link>
                </li>
              </ul>
            </section>
          </section>
        </section>

        <p>
          Copyright © Code for Good {new Date().getFullYear()}. All Rights
          Reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
