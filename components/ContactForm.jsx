import React, { useState } from "react";
import styles from "../styles/ContactForm.module.scss";
import { useRouter } from "next/router";

import { motion } from "framer-motion";

import { HiArrowSmallRight } from "react-icons/hi2";

import { Fade } from "react-awesome-reveal";

export default function ContactForm() {
  const router = useRouter();

  const [sent, setSent] = useState(false);

  // Initial status state
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  // All inputs used in the form
  const [inputs, setInputs] = useState({
    name: "",
    message: "",
    subject: "",
    email: "",
  });

  // Reset the data and set submitted to true after submitting
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  // Update values on change of any input
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  // Reset the status so user can send again
  const resetStatus = () => {
    setSent(false);

    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  // Handle submitting
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    handleServerResponse(true, "Thank you, your message has been submitted.");
  };

  const ContactForm = (
    <Fade cascade triggerOnce delay={500}>
      <form onSubmit={handleOnSubmit}>
        {/* Hidden input used to change the subject of the email */}
        <input
          type="hidden"
          name="_subject"
          value="New message from portfolio website"
        />
        <div className={styles.group}>
          <div className={styles.one}>
            <input
              placeholder="Name"
              id="name"
              name="name"
              onChange={handleOnChange}
              required
              value={inputs.name}
            />
          </div>
          <div className={styles.two}>
            <input
              placeholder="Email address"
              id="email"
              type="email"
              name="_replyto"
              onChange={handleOnChange}
              required
              value={inputs.email}
            />
          </div>
        </div>

        <div className={styles.full}>
          <input
            placeholder="Subject"
            id="subject"
            name="subject"
            onChange={handleOnChange}
            required
            value={inputs.subject}
          />
        </div>

        <textarea
          placeholder="Message"
          id="message"
          name="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
          rows="10"
        />

        {/* Text of button changes depending on the status */}
        <motion.button
          type="submit"
          disabled={status.submitting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h6>
            {!status.submitting
              ? !status.submitted
                ? "Send"
                : "Sent"
              : "Sending..."}
          </h6>
        </motion.button>
      </form>
    </Fade>
  );

  const SentMessage = (
    <Fade cascade triggerOnce delay={100}>
      <section className={styles.thankyou}>
        <h5>
          Thank you for getting in touch! We appreciate you contacting us. One
          of our colleagues will get back in touch with you soon! Have a great
          day!
        </h5>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          onClick={resetStatus}
        >
          <h6>Send again</h6>
          <HiArrowSmallRight />
        </motion.button>
      </section>
    </Fade>
  );

  return (
    <div className={styles.contactForm} id="contact">
      {sent ? SentMessage : ContactForm}
    </div>
  );
}
