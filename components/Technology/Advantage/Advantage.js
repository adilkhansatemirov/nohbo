import styles from 'styles/Technology/Advantage/Advantage.module.scss';

function Advantage() {
  return (
    <div className={styles.advantage}>
      <div className={styles.container}>
        <h3 className={styles.title}>The Competitive Advantage</h3>
        <div className={styles.items1}>
          <div className={styles.item}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/hands.gif" alt="hands" />
            <div className={styles.itemMain}>
              <h5>First-to-market</h5>
              <p>
                The world’s first liquid, single-use personal care product that exists without the need for any outer plastic
                packaging
              </p>
            </div>
          </div>
          <div className={styles.item}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/processor.gif" alt="processor" />
            <div className={styles.itemMain}>
              <h5>Robust IP portfolio</h5>
              <p>
                3 issued patents & multiple other pending patents (utility/design/PCT) covering our novel chassis, water
                soluble film, and delivery system as a whole; a technology that will carry over to the world of multiple
                CPG applications
              </p>
            </div>
          </div>
        </div>
        <div className={styles.items2}>
          <div className={styles.item}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/loop.gif" alt="loop" />
            <div className={styles.itemMain}>
              <h5>Obsessively dedicated R&D</h5>
              <p>
                A deep understanding of anhydrous solutions and PVOH domain, providing competitive advantage in the
                market, and accelerated product development life-cycle
              </p>
            </div>
          </div>
          <div className={styles.item}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/tech.gif" alt="tech" />
            <div className={styles.itemMain}>
              <h5>Fully owned supply chain</h5>
              <p>
                Vertically integrated supply chain with optimized product yield, lead times, and pricing. Redundancies
                built in to engage with our developed external supply chain, increasing production capacity multi-fold
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantage;
