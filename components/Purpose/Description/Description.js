import ScrollAnimation from 'react-animate-on-scroll';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import styles from 'styles/Purpose/Description/Description.module.scss';

function Description() {
  return (
    <div className={styles.container}>
      <h3 className={styles.mainText}>
        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          To minimize plastic consumption and foster a sustainable and environmentally-conscious culture with disruptive
          single-use products packaged in water-soluble film.
        </ScrollAnimation>
      </h3>
      <div className={styles.billion}>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.billionImage} src="/images/truck.gif" alt="truck" />
        </ScrollAnimation>
        <h4 className={styles.billionText}>
          <ScrollAnimation animateIn="fadeInRight" animateOnce>
            120 billion units of personal care packages are produced and thrown away every year
          </ScrollAnimation>
        </h4>
      </div>
      <div className={styles.impact}>
        <h3 className={styles.impactText}>
          <ScrollAnimation animateIn="fadeInLeft" animateOnce>
            The Impact
          </ScrollAnimation>
        </h3>
        <div className={styles.impactPercent}>
          <ScrollAnimation animateIn="fadeInRight" animateOnce>
            <div className={styles.impactPercentItem}>
              <h3>95%</h3>
              <p>of personal care products are thrown out after just one use</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" animateOnce>
            <div className={`${styles.impactPercentItem} ${styles.impactPercentItemCenter}`}>
              <h3>79%</h3>
              <p>of these items are estimated to end up in the ocean or landfills</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" animateOnce>
            <div className={styles.impactPercentItem}>
              <h3>400</h3>
              <p>These products can take up to 400 years to decompose</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default Description;
