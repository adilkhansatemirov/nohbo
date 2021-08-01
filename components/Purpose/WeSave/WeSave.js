import ScrollAnimation from 'react-animate-on-scroll';
import styles from 'styles/Purpose/WeSave/WeSave.module.scss';

const list = [
  {
    id: 1,
    text: '15,590 pounds of water',
    imageSrc: 'drops.gif',
  },
  {
    id: 2,
    text: '22,050 pounds of plastic',
    imageSrc: 'bottles.gif',
  },
  {
    id: 3,
    text: '220 pounds of preservative',
    imageSrc: 'powder.gif',
  },
];

function WeSave() {
  return (
    <section>
      <div className={styles.weSave}>
        <div className={styles.container}>
          <h3 className={styles.title}>Per every 1 million Drops used, we save…</h3>
          <div className={styles.list}>
            {list.map((item, index) => (
              <ScrollAnimation key={item.id} animateIn="fadeInUp" animateOnce delay={index * 200}>
                <div className={styles.item}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className={styles.itemImage} src={`/images/${item.imageSrc}`} alt="item" />
                  <h4 className={styles.itemText}>{item.text}</h4>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.perMillion}>
        <div className={styles.container}>
          <div className={styles.perMillionContainer}>
            <h3 className={styles.perMillionTitle}>
              <ScrollAnimation animateIn="fadeInLeft" animateOnce>
                Per every 1 million Slips used, we save…
              </ScrollAnimation>
            </h3>
            <div className={styles.perMillionStats}>
              <ScrollAnimation animateIn="fadeInRight" animateOnce>
                <div className={styles.perMillionStatsItem}>
                  <span>800</span>
                  <p>pounds of plastic packaging</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInRight" animateOnce>
                <div className={styles.perMillionStatsItem}>
                  <span>476</span>
                  <p>pounds of shipping weight, equating to hundreds of tons of fuel </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeSave;
