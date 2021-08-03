import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from 'styles/Home/Brand/Brand.module.scss';

function Brand() {
  return (
    <section className={styles.brand}>
      <div className={styles.image__container}>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.image} src="/images/ss.png" alt="ss" />
        </ScrollAnimation>
      </div>
      <div className={styles.main}>
        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <h3 className={styles.title}>Our Brand</h3>
          <p className={styles.description}>
            Sunrise Session is a single-use, plastic waste-free self-care innovation brand owned and operated by Nohbo.
            For the conscious decelerator with an on-the-go lifestyle, Sunrise Session offers water-seeking concentrates
            and feel-good ingredients that are plant-based, vegan, cruelty-free, non-toxic, biodegradable, and ethically
            sourced.
          </p>
          <a href="https://sunrisesession.com" target="_blank" rel="noopener noreferrer">
            <button className={styles.button}>Check It Out</button>
          </a>
        </ScrollAnimation>
      </div>
    </section>
  );
}

export default Brand;
