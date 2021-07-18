import ScrollAnimation from 'react-animate-on-scroll';
import styles from 'styles/Technology/Solutions/Solutions.module.scss';

function Solutions() {
  return (
    <div>
      <h3 className={styles.title}>Our Solutions</h3>
      <div className={styles.solutions}>
        <div className={styles.container}>
          <h5 className={styles.leftText}>
            <ScrollAnimation animateIn="fadeInLeft" animateOnce>
              The Science
            </ScrollAnimation>
          </h5>
          <div className={styles.rightTextContainer}>
            <div className={styles.topText}>
              <ScrollAnimation animateIn="fadeInRight" animateOnce>
                Traditional <span className={styles.bold}>personal care products are comprised of 60-90% water.</span>
              </ScrollAnimation>
            </div>
            <div className={styles.bottomText}>
              <ScrollAnimation animateIn="fadeInRight" animateOnce>
                Utilizing earth derived compounds and novel green chemistry practices, we’ve figured out how to safely
                and efficaciously <span className={styles.bold}>encapsulate (pod) personal care products</span> in water
                soluble film. 
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solutions;
