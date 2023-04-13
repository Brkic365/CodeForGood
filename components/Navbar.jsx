import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

import { motion } from "framer-motion";

import MobileMenu from "./MobileMenu";

import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/router";

import {
  BsInfoCircleFill,
  BsFillPersonFill,
  BsFillTrophyFill,
  BsTelephoneFill,
} from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";

import { useDetectScroll } from "@smakss/react-scroll-direction";

function Navbar() {
  const router = useRouter();

  const [scrollDir] = useDetectScroll({});

  // State that handles opening and closing of the mobile menu
  const [openMenu, setOpenMenu] = useState(false);

  // State that handles visible status of navbar
  const [visible, setVisible] = useState(true);

  // State that handles visible status of navbar background
  const [visibleBg, setVisibleBg] = useState(false);

  // State that handles if scroll is on start or not
  const [onStart, setOnStart] = useState(true);

  const [links] = useState([
    {
      title: "About",
      href: "/#about",
      img: <BsInfoCircleFill />,
    },
    {
      title: "Speakers",
      href: "/#speakers",
      img: <BsFillPersonFill />,
    },
    {
      title: "Sponsors",
      href: "/#sponsors",
      img: <FaHandshake />,
    },
    {
      title: "Prizes",
      href: "/#prizes",
      img: <BsFillTrophyFill />,
    },
    {
      title: "Contact",
      href: "/#contact",
      img: <BsTelephoneFill />,
    },
  ]);

  useEffect(() => {
    // If user scrolled more than 150px, display bg behind navbar
    const handleScroll = () => {
      setVisibleBg(window.scrollY > 0);

      setOnStart(window.scrollY === 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setVisible(scrollDir === "up");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollDir]);

  // Values asigned to the navbar used for showing or hiding
  const navVariants = {
    visible: { transform: "translateY(0%)" },
    invisible: { transform: "translateY(-110%)" },
  };

  // Values asigned to the top line of the hamburger menu used for rotation
  const topLineVariants = {
    open: { transform: "translateY(350%) rotateZ(45deg)" },
    closed: { transform: "translateY(0%) rotateZ(0deg)" },
  };

  // Values asigned to the bottom line of the hamburger menu used for rotation
  const bottomLineVariants = {
    open: { transform: "translateY(-350%) rotateZ(-45deg)" },
    closed: { transform: "translateY(0%) rotateZ(0deg)" },
  };

  return (
    <motion.nav
      className={styles.nav}
      animate={visible || openMenu || onStart ? "visible" : "invisible"}
      transition={{ duration: 0.3, type: "tween" }}
      variants={navVariants}
      style={{ backgroundColor: visibleBg ? "#1A1A1A" : "transparent" }}
    >
      <MobileMenu
        open={openMenu}
        links={links}
        setOpen={(open) => setOpenMenu(open)}
      />

      <section className={styles.logoHolder} onClick={() => router.push("/")}>
        <Image
          src="/images/logo.webp"
          alt="Polyminds logo"
          width={74}
          height={19.15}
          layout="responsive"
          objectFit="contain"
          priority
        />
      </section>

      {/* Navbar links */}
      <ul className={styles.links}>
        {links.map((link) => {
          return (
            <li key={link.href}>
              <a href={link.href}>{link.title}</a>
            </li>
          );
        })}

        <li>
          <motion.button
            className={styles.cta}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/#tickets")}
          >
            Get Tickets
          </motion.button>
        </li>
      </ul>

      <div
        className={styles.hamburger}
        onClick={() => setOpenMenu(!openMenu)}
        id="hamburger"
      >
        <motion.div
          className={styles.line}
          animate={openMenu ? "open" : "closed"}
          transition={{ duration: 0.3, type: "tween" }}
          variants={topLineVariants}
          id="line1"
        />
        <div
          className={styles.line}
          style={openMenu ? { opacity: 0 } : undefined}
          id="line2"
        />
        <motion.div
          className={styles.line}
          animate={openMenu ? "open" : "closed"}
          transition={{ duration: 0.3, type: "tween" }}
          variants={bottomLineVariants}
          id="line3"
        />
      </div>
    </motion.nav>
  );
}

export default Navbar;
