import ScrollAnimation from 'react-animate-on-scroll';
import styles from 'styles/Home/Philosophy/Philosophy.module.scss';

function Philosophy() {
  return (
    <section className={styles.philosophy}>
      <div className={styles.container}>
        <ScrollAnimation animateIn="fadeIn" animateOnce>
          <h2 className={styles.title}>Our Philosophy</h2>
          <p className={styles.description}>
            To create a superior line of eco-friendly personal care products that lather, cleanse and nourish without
            compromise to quality, sustainability, or performance.{' '}
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
}

export default Philosophy;
