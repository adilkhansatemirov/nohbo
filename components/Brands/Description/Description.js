import styles from 'styles/Brands/Description/Description.module.scss';

function Description() {
  return (
    <div className={styles.container}>
      <div className={styles.descriptionContainer}>
        <h3 className={styles.description}>
          Our water-seeking concentrates and feel-good ingredients power your present and protect our planet.
        </h3>
      </div>
      <div className={styles.sunriseContainer}>
        <h3 className={styles.sunriseText}>
          Sunrise Session is a single-use plastic waste-free self-care innovation brand, owned and operated by Nohbo.
        </h3>
        <div className={styles.sunriseImageContainer}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.sunriseImage} src="/images/sunrise.png" alt="sunrise" />
        </div>
      </div>
    </div>
  );
}

export default Description;
