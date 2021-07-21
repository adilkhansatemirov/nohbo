import Head from 'next/head';
import Nav from 'components/Nav/Nav';
import DropLine from 'components/ContactUs/DropLine/DropLine';
import Form from 'components/ContactUs/Form/Form';
import Footer from 'components/Footer/Footer';

import styles from 'styles/ContactUs/ContactUs.module.scss';

function ContactUs({ toast }) {
  return (
    <div>
      <Head>
        <title>Contact us</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <Nav />
      <div className={styles.container}>
        <DropLine />
        <Form toast={toast} />
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
