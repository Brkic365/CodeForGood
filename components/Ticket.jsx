import React from "react";
import styles from "@/styles/Ticket.module.scss";

import { HiCheck, HiX } from "react-icons/hi";

import features from "@/public/data/features.json";

import { motion } from "framer-motion";

function Ticket({ ticket }) {
  return (
    <section className={styles.ticket} style={{ borderColor: ticket.color }}>
      <section
        className={styles.headline}
        style={{ borderColor: ticket.color }}
      >
        <h4 style={{ color: ticket.color }}>{ticket.name} Pass</h4>
        <h1>${ticket.price}</h1>
      </section>
      <section className={styles.features}>
        {features.map((feature, i) => {
          // If amount of features is higher that the index of current one, that means
          // the limit is not passed
          let hasFeature = ticket.features > i;

          return (
            <section className={styles.feature} key={i}>
              <section
                className={styles.check}
                style={{
                  backgroundColor: hasFeature ? ticket.color : "#666666",
                }}
              >
                {hasFeature ? <HiCheck /> : <HiX />}
              </section>

              <p
                style={{
                  opacity: hasFeature ? 1 : 0.5,
                }}
              >
                {feature}
              </p>
            </section>
          );
        })}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundColor: ticket.color,
          }}
        >
          Get Ticket
        </motion.button>
      </section>
    </section>
  );
}

export default Ticket;
