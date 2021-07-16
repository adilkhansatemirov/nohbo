import Head from 'next/head';
import Header from 'components/Home/Header/Header';
import Subheader from 'components/Home/Subheader/Subheader';
import Technologies from 'components/Home/Technoloies/Technologies';
import ScrollAnimation from 'react-animate-on-scroll';
import Products from 'components/Home/Products/Products';
import Philosophy from 'components/Home/Philosophy/Philosophy';
import Brand from 'components/Home/Brand/Brand';
import Buzz from 'components/Home/Buzz/Buzz';
import Subscribe from 'components/Home/Subscribe/Subscribe';
import Contact from 'components/Home/Contact/Contact';
import Footer from 'components/Footer/Footer';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div style={{ overflow: 'hidden' }} className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Subheader />
      <ScrollAnimation animateIn="bounceInLeft" animateOnce>
        <Technologies />
      </ScrollAnimation>
      <Products />
      <Philosophy />
      <Brand />
      <Buzz />
      <Subscribe />
      <Contact />
      <Footer />
    </div>
  );
}
