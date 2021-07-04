import styles from 'styles/Home/Subscribe/Subscribe.module.scss';

function Subscribe() {
  return (
    <section className={styles.subscribe}>
      <div className={styles.container}>
        <h3 className={styles.title}>Want to be in the know of what we are up to?</h3>
        <p className={styles.description}>Subscribe to receive periodic updates about the latest on what’s droppin.</p>
        <input className={styles.input} type="text" placeholder="Enter your Email" />
        <button className={styles.button}>Subscribe</button>
      </div>
    </section>
  );
}

export default Subscribe;
