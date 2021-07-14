import styles from 'styles/Technology/Solutions/Solutions.module.scss';

function Solutions() {
  return (
    <div>
      <h3 className={styles.title}>Our Solutions</h3>
      <div className={styles.solutions}>
        <div className={styles.container}>
          <h5 className={styles.leftText}>The Science</h5>
          <div className={styles.rightTextContainer}>
            <p className={styles.topText}>
              Traditional <span className={styles.bold}>personal care products are comprised of 60-90% water.</span>
            </p>
            <p className={styles.bottomText}>
              Utilizing earth derived compounds and novel green chemistry practices, we’ve figured out how to safely and
              efficaciously <span className={styles.bold}>encapsulate (pod) personal care products</span> in water
              soluble film. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solutions;
