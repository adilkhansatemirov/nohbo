import styles from 'styles/Purpose/Description/Description.module.scss';

function Description() {
  return (
    <div className={styles.container}>
      <h3 className={styles.mainText}>
        To minimize plastic consumption and foster a sustainable and environmentally-conscious culture with disruptive
        single-use products packaged in water-soluble film.
      </h3>
      <div className={styles.billion}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.billionImage} src="/images/truck.png" alt="truck" />
        <h4 className={styles.billionText}>
          120 billion units of personal care packages are produced and thrown away every year
        </h4>
      </div>
      <div className={styles.impact}>
        <h3 className={styles.impactText}>The Impact</h3>
        <div className={styles.impactPercent}>
          <div className={styles.impactPercentItem}>
            <h3>95%</h3>
            <p>of personal care products are thrown out after just one use</p>
          </div>
          <div className={styles.impactPercentItem}>
            <h3>79%</h3>
            <p>of these items are estimated to end up in the ocean or landfills</p>
          </div>
          <div className={styles.impactPercentItem}>
            <h3>400</h3>
            <p>These products can take up to 400 years to decompose</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
