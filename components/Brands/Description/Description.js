import ScrollAnimation from 'react-animate-on-scroll';
import styles from 'styles/Brands/Description/Description.module.scss';

function Description() {
  return (
    <div className={styles.container}>
      <div className={styles.descriptionContainer}>
        <h3 className={styles.description}>
          <ScrollAnimation animateIn="fadeInUp" animateOnce>
            Our water-seeking concentrates and feel-good ingredients power your present and protect our planet.
          </ScrollAnimation>
        </h3>
      </div>
      <div className={styles.sunriseContainer}>
        <h3 className={styles.sunriseText}>
          <ScrollAnimation animateIn="fadeInLeft" animateOnce>
            Sunrise Session is a single-use, plastic, waste-free self-care innovation brand, owned and operated by Nohbo.
          </ScrollAnimation>
        </h3>
        <div className={styles.sunriseImageContainer}>
          <ScrollAnimation animateIn="fadeInRight" animateOnce>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <a href="https://sunrisesession.com/" target="_blank"><img className={styles.sunriseImage} src="/images/sunrise.png" alt="sunrise" /><a/>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default Description;
