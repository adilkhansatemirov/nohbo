import ScrollAnimation from 'react-animate-on-scroll';
import styles from 'styles/Team/Description/Description.module.scss';

function Description() {
  return (
    <div className={styles.container}>
      <div className={styles.founderContainer}>
        <div className={styles.founderImageContainer}>
          <ScrollAnimation animateIn="fadeInLeft" animateOnce>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.founderImage} src="/images/founder.png" alt="founder" />
          </ScrollAnimation>
        </div>
        <div className={styles.founderText}>
          <ScrollAnimation animateIn="fadeInRight" animateOnce>
            <h3 className={styles.founderName}>
              Ben Stern
              <a href="https://www.linkedin.com/in/benjamin-stern-746812a4/" target="_blank" rel="noopener noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/linkedin-blue.svg" alt="linkedin-blue" />
              </a>
            </h3>
            <h5 className={styles.founderPosition}>Founder & CEO</h5>
            <p className={styles.founderDescription}>
              Ben ideated Nohbo as a passion project after viewing a documentary in his biology class covering the ins
              and outs of the plastic bottling industry. He was horrified to see a plethora of waste flooding landfills
              and oceans as well as engulfing local ecosystems across the globe. Taking this issue deeply to heart, and
              determined that reducing, reusing and recycling did not hold any muster to replacing the need for plastic
              consumption outright, he founded Nohbo on the premise of making products that disappear. Shortly
              thereafter, Nohbo made waves with an appearance on Shark Tank. Ben won over the panel of investors with
              his eco-friendly podded shampoo company, and secured a deal with Mark Cuban to make his vision a reality.
              Fast forward to today, Ben manages a team of beauty and personal care experts, hungry and vision-driven,
              to eliminate plastics outright from an industry drowning in it. Ben is a Thiel Fellow, pilot, and avid
              backgammon player.
            </p>
          </ScrollAnimation>
        </div>
      </div>
      <div className={styles.supportersContainer}>
        <h3 className={styles.supportersTitle}>Our Supporters</h3>
        <div className={styles.supportersImageContainer}>
           <ScrollAnimation animateIn="fadeIn" animateOnce delay={item * 100}>
              <a href="https://www.linkedin.com/in/benjamin-stern-746812a4/" target="_blank" rel="noopener noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/linkedin-blue.svg" alt="linkedin-blue" />
              </a>
           </ScrollAnimation>
      </div>
        <div className={styles.supportersImageContainer}>
          {[1, 2, 3, 4].map((item) => (
            <div className={styles.supporterImageContainer} key={item}>
              <ScrollAnimation animateIn="fadeIn" animateOnce delay={item * 100}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={styles.supportersImage} src={`/images/supporter1.png`} alt="supporter" />
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Description;
