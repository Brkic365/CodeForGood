import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Policy.module.scss";

function PrivacyPolicy() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Privacy Policy | Code For Good</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Site Description." />
        <meta property="og:image" content="/images/logo.webp" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <section className={styles.policy}>
        <h1>PRIVACY POLICY</h1>
        <p>Updated April 8, 2023</p>
        <p>
          Code for Good is committed to protecting the privacy and security of
          your personal information. This privacy policy describes how we
          collect and use personal information and the measures we take to
          protect your privacy.
        </p>
        <h2>1. Information We Collect</h2>
        <p>
          We collect personal information, such as your name and email address,
          when you sign up for our newsletter or contact us through our website.
          We also collect non-personal information, such as your IP address,
          browser type, and operating system, when you visit our website.
        </p>
        <h2>2. How We Use Your Information</h2>
        <p>
          We use your personal information to provide you with the services you
          have requested, such as sending you newsletters or responding to your
          inquiries. We may also use your information to improve our services,
          to send you marketing communications, or to comply with legal
          requirements.
        </p>
        <p>
          We may share your information with third-party service providers, such
          as email marketing providers, who help us deliver our services. We
          only share information necessary to provide the services and require
          these providers to maintain the confidentiality of your information.
        </p>
        <p>
          We do not sell or rent your personal information to third parties.
        </p>
        <h2>3. Data Security</h2>
        <p>
          We take appropriate measures to protect the security of your personal
          information and prevent unauthorized access, disclosure, or
          alteration. We use encryption, firewalls, and other security
          technologies to protect your data.
        </p>
        <h2>4. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal
          information at any time. You may also object to or restrict the
          processing of your information or withdraw your consent for
          processing.
        </p>
        <p>
          If you have any questions about our privacy policy or want to exercise
          your rights, please contact us at{" "}
          <span>
            <Link href="mailto:info@polyminds.tech">info@polyminds.tech</Link>
          </span>
          .
        </p>
        <h2>5. Updates to This Policy</h2>
        <p>
          We may update this privacy policy from time to time to reflect changes
          in our services or legal requirements. We will notify you of any
          material changes to the policy by posting a notice on our website or
          sending you an email.
        </p>
      </section>
    </main>
  );
}

export default PrivacyPolicy;
