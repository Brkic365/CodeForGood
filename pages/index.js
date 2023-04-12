import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";

import { HiArrowSmallRight, HiOutlinePlayCircle } from "react-icons/hi2";

import Speaker from "@/components/Speaker";
import Ticket from "@/components/Ticket";
import ContactForm from "@/components/ContactForm";
import NewsletterInput from "@/components/NewsletterInput";

import speakers from "@/public/data/speakers.json";
import tickets from "@/public/data/tickets.json";
import sponsors from "@/public/data/sponsors.json";
import prizes from "@/public/data/prizes.json";

import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  return (
    <>
      <Head>
        <title>Code For Good</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Site Description." />
        <meta property="og:image" content="/images/logo.webp" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <main className={styles.main}>
        {/* Hero section */}
        <section className={styles.hero}>
          <section className={styles.text}>
            <span>AUGUST 2023</span>
            <h1>HELP CHANGE THE WORLD WITH TECHNOLOGY</h1>
            <p>
              Collaborate with Developers, Designers, and Other Tech
              Professionals to Create Solutions that Address Social Challenges
              and Win Cash Prizes up to $10,000!
            </p>
            <section className={styles.buttons}>
              <Link href="\#tickets">
                <button>
                  Get tickets
                  <HiArrowSmallRight />
                </button>
              </Link>
              <button className={styles.watchTrailer}>
                Watch the trailer
                <HiOutlinePlayCircle />
              </button>
            </section>
          </section>

          <section className={styles.heroContent}>
            <div className={styles.circle} />
          </section>
        </section>

        {/* About section */}
        <section className={styles.about} id="about">
          <section className={styles.text}>
            <Fade cascade damping={0.4} triggerOnce delay={100}>
              <span>ABOUT</span>
              <h2>ALL YOU NEED TO KNOW ABOUT CODE FOR GOOD</h2>
              <p>
                The Code for Good Hackathon is an event that brings together
                developers, designers, and other tech professionals to
                collaborate and create technology solutions that address social
                challenges. The event is open to anyone with an interest in
                using technology for social good. Participants will work in
                teams to develop solutions related to a specific theme, and cash
                prizes will be awarded to the winning teams.
              </p>
            </Fade>
          </section>

          <section className={styles.aboutContent}>
            <div className={styles.image1} />
            <div className={styles.image2} />
          </section>
        </section>

        {/* Speakers section */}
        <section className={styles.speakers} id="speakers">
          <section className={styles.text}>
            <Fade cascade damping={0.4} triggerOnce>
              <span>INSPIRING TECH VISIONARIES</span>
              <h2>MEET OUR 2023 SPEAKERS</h2>
              <p>
                Discover the Minds Behind the Next Generation of Tech Solutions
                for Social Impact.
              </p>
            </Fade>
          </section>

          <section className={styles.speakersGrid}>
            <Fade cascade damping={0.4} triggerOnce delay={500}>
              {speakers.map((speaker, i) => {
                return <Speaker speaker={speaker} id={i} />;
              })}
            </Fade>
          </section>
        </section>

        {/* Tickets section */}
        <section className={styles.tickets} id="tickets">
          <section className={styles.text}>
            <Fade cascade damping={0.4} triggerOnce>
              <span>7 & 8 AUGUST 2023</span>
              <h2>GET YOUR TICKETS HERE</h2>
              <p>
                Don't Miss Out on the Opportunity to Be Part of the Code for
                Good Hackathon: Get Your Tickets Now!
              </p>
            </Fade>
          </section>

          <Fade cascade damping={0.4} triggerOnce delay={500}>
            <section className={styles.ticketsGrid}>
              {tickets.map((ticket, i) => {
                return <Ticket ticket={ticket} id={i} />;
              })}
            </section>
          </Fade>
        </section>

        {/* Sponsor section */}
        <section className={styles.sponsors} id="sponsors">
          <section className={styles.text}>
            <Fade cascade damping={0.4} triggerOnce>
              <span>EMPOWERING TOGETHER</span>
              <h2>THANKS TO OUR SPONSORS!</h2>
              <p>Supporting Social Good Through Technology.</p>
            </Fade>
          </section>

          <section className={styles.sponsorsGrid}>
            <section className={styles.quad}>
              <Fade cascade damping={0.4} triggerOnce delay={500}>
                {sponsors.slice(0, 4).map((sponsor, i) => {
                  return (
                    <section className={styles.logoHolder} id={i}>
                      <Image
                        src={`/images/sponsors/${sponsor.name}.webp`}
                        alt={sponsor.name}
                        width={sponsor.width}
                        height={sponsor.height}
                        layout="responsive"
                        objectFit="contain"
                        priority
                      />
                    </section>
                  );
                })}
              </Fade>
            </section>
            <section className={styles.quad}>
              <Fade cascade damping={0.4} triggerOnce delay={1500}>
                {sponsors.slice(4, 8).map((sponsor, i) => {
                  return (
                    <section className={styles.logoHolder} id={i}>
                      <Image
                        src={`/images/sponsors/${sponsor.name}.webp`}
                        alt={sponsor.name}
                        width={sponsor.width}
                        height={sponsor.height}
                        layout="responsive"
                        objectFit="contain"
                      />
                    </section>
                  );
                })}
              </Fade>
            </section>
          </section>
        </section>

        {/* Prizes section */}
        <section className={styles.prizes} id="prizes">
          <section className={styles.text}>
            <Fade cascade damping={0.4} triggerOnce>
              <span>UNLOCK YOUR POTENTIAL</span>
              <h2>WIN BIG AT THE CODE FOR GOOD HACKATHON</h2>
              <p>Discover the Amazing Prizes You Could Take Home.</p>
            </Fade>
          </section>
          <Fade cascade damping={0.4} triggerOnce delay={500}>
            <section className={styles.prizesGrid}>
              {prizes.map((prize, i) => {
                return (
                  <section className={styles.prize} id={i}>
                    <section className={styles.imgHolder} id={i}>
                      <Image
                        src={`/images/numbers/no${i + 1}.png`}
                        alt={`no${i + 1}`}
                        width={213}
                        height={274}
                        layout="responsive"
                        objectFit="contain"
                      />
                    </section>

                    <section className={styles.info}>
                      <h3>{prize.title}</h3>
                      <p>{prize.description}</p>
                    </section>
                  </section>
                );
              })}
            </section>
          </Fade>
        </section>

        {/* Contact section */}
        <section className={styles.contact} id="contact">
          <section className={styles.text}>
            <Fade cascade damping={0.4} triggerOnce>
              <span>CONTACT FOR IMPACT</span>
              <h2>GET IN TOUCH</h2>
              <p>Let Us Help You Make a Difference.</p>
            </Fade>
          </section>

          <ContactForm />
        </section>

        {/* Newsletter section */}
        <section className={styles.newsletter}>
          <section className={styles.text}>
            <Fade cascade damping={0.4} triggerOnce>
              <span>JOIN OUR COMMUNITY</span>
              <h2>STAY INFORMED</h2>
              <p>Get the Latest News and Updates.</p>
            </Fade>
          </section>

          <Fade cascade damping={0.4} triggerOnce delay={500}>
            <NewsletterInput />
          </Fade>
        </section>
      </main>
    </>
  );
}
