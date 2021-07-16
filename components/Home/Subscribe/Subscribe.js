import ScrollAnimation from 'react-animate-on-scroll';
import styles from 'styles/Home/Subscribe/Subscribe.module.scss';

function Subscribe() {
  return (
    <section className={styles.subscribe}>
      <div className={styles.container}>
        <ScrollAnimation animateIn="fadeIn" animateOnce>
          <h3 className={styles.title}>Want to be in the know of what we are up to?</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce>
          <p className={styles.description}>
            Subscribe to receive periodic updates about the latest on what’s droppin.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce>
          <input className={styles.input} type="text" placeholder="Enter your Email" />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce>
          <button className={styles.button}>Subscribe</button>
        </ScrollAnimation>
      </div>
    </section>
  );
}

export default Subscribe;
