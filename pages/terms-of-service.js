import React from "react";
import Head from "next/head";
import styles from "@/styles/Policy.module.scss";

function TermsOfService() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Terms of Service | Code For Good</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Site Description." />
        <meta property="og:image" content="/images/logo.webp" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <section className={styles.policy}>
        <h1>TERMS OF SERVICE</h1>
        <p>Updated April 8, 2023</p>
        <p>
          These terms of service (“Agreement”) govern your use of the Code for
          Good website (“Website”) and services (“Services”) provided by Code
          for Good (“Company”). By accessing or using the Website or Services,
          you agree to be bound by this Agreement.
        </p>
        <h2>1. Use of Website and Services</h2>
        <p>
          You may use the Website and Services only for lawful purposes and in
          compliance with this Agreement. You may not use the Website or
          Services to engage in any activity that infringes on the rights of
          others, violates any law or regulation, or is harmful, threatening, or
          abusive.
        </p>
        <h2>2. Intellectual Property</h2>
        <p>
          The Website and Services, including all content, trademarks, logos,
          and other intellectual property, are owned by the Company or its
          licensors and are protected by copyright, trademark, and other
          intellectual property laws. You may not use, copy, reproduce, or
          modify any part of the Website or Services without the Company’s prior
          written consent.
        </p>
        <h2>3. User Content</h2>
        <p>
          You may submit content, such as comments or feedback, to the Website
          or Services (“User Content”). You retain all ownership rights in your
          User Content, but you grant the Company a non-exclusive, royalty-free,
          worldwide, perpetual, and irrevocable license to use, display,
          reproduce, and distribute your User Content in connection with the
          Website and Services.
        </p>
        <p>
          By submitting User Content, you represent and warrant that you have
          the right to submit the content and that it does not infringe on the
          rights of any third party. You agree to indemnify the Company for any
          claims arising from your User Content.
        </p>
        <h2>4. Disclaimer of Warranties</h2>
        <p>
          The Website and Services are provided “as is” and without warranties
          of any kind, whether express or implied. The Company does not warrant
          that the Website or Services will be uninterrupted or error-free, nor
          does it make any representations regarding the accuracy or
          completeness of any content.
        </p>
        <h2>5. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, the Company will not be liable
          for any damages arising out of or in connection with your use of the
          Website or Services, including any direct, indirect, incidental,
          consequential, or punitive damages.
        </p>
        <h2>6. Indemnification</h2>
        <p>
          You agree to indemnify and hold the Company and its officers,
          directors, employees, and agents harmless from any claims, damages, or
          expenses arising out of your use of the Website or Services, your User
          Content, or your violation of this Agreement.
        </p>
        <h2>7. Governing Law</h2>
        <p>
          This Agreement and your use of the Website and Services are governed
          by the laws of Croatia. Any legal action or proceeding relating to
          this Agreement must be brought in the courts of Croatia.
        </p>
        <h2>8. Entire Agreement</h2>
        <p>
          This Agreement constitutes the entire agreement between you and the
          Company regarding the use of the Website and Services. If any
          provision of this Agreement is found to be invalid or unenforceable,
          the remaining provisions will remain in full force and effect.
        </p>
        <h2>9. Amendments</h2>
        <p>
          The Company may amend this Agreement from time to time by posting a
          revised version on the Website. Your continued use of the Website or
          Services after the effective date of any amended Agreement constitutes
          your acceptance of the amended Agreement.
        </p>
      </section>
    </main>
  );
}

export default TermsOfService;
