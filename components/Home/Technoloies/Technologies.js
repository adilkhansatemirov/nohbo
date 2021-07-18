import ScrollAnimation from 'react-animate-on-scroll';
import styles from 'styles/Home/Technologies/Technologies.module.scss';

function Technologies() {
  return (
    <section className={`${styles.technoloies} wow slideInLeft`}>
      <div className={styles.technoloies__container}>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce>
          <div className={styles.technoloies__textContainer}>
            <h3 className={styles.technoloies__title}>Our Technology</h3>
            <p className={styles.technoloies__description}>
              We are fearless believers that packaging is antiquated, plastic is unnecessary, and the future of personal
              care stems from our sustainable and groundbreaking packaging transformations that disappear without a
              trace.
            </p>
          </div>
        </ScrollAnimation>
        <div className={styles.imageContainer}>
          <ScrollAnimation animateIn="fadeInUp" animateOnce>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.technoloies__image} src="/images/home_stand.png" alt="products" />
          </ScrollAnimation>
          <ScrollAnimation delay={1000} animateIn="fadeIn" animateOnce>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.imageDrop1} src="/images/home_drop1.png" alt="home_drop1" />
            <div className={styles.imageDrop1Shadow}></div>
          </ScrollAnimation>
          <ScrollAnimation delay={1000} animateIn="fadeIn" animateOnce>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.imageDrop2} src="/images/home_drop2.png" alt="home_drop2" />
            {/* <div className={styles.imageDrop2Shadow}></div> */}
          </ScrollAnimation>
          <ScrollAnimation delay={1000} animateIn="fadeIn" animateOnce>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.imageDrop3} src="/images/home_drop3.png" alt="home_drop3" />
            <div className={styles.imageDrop3Shadow}></div>
          </ScrollAnimation>
          <ScrollAnimation delay={1000} animateIn="fadeIn" animateOnce>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.imageDrop4} src="/images/home_drop4.png" alt="home_drop4" />
            <div className={styles.imageDrop4Shadow}></div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
