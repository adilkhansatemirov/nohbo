import styles from 'styles/Home/Buzz/Buzz.module.scss';

function Buzz() {
  return (
    <section className={styles.buzz}>
      <h3 className={styles.title}>The Buzz</h3>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.image} src="/images/buzz.png" alt="buzz" />
    </section>
  );
}

export default Buzz;
