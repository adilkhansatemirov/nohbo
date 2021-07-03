import styles from 'styles/Home/Philosophy/Philosophy.module.scss';

function Philosophy() {
  return (
    <section className={styles.philosophy}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Philosophy</h2>
        <p className={styles.description}>
          To create a superior line of eco-friendly personal care products that lather, cleanse and nourish without
          compromise to quality, sustainability, or performance.{' '}
        </p>
      </div>
    </section>
  );
}

export default Philosophy;
