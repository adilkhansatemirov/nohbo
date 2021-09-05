import styles from 'styles/Technology/Chain/Chain.module.scss';

function Chain() {
  return (
    <div className={styles.chain}>
      <div className={styles.container}>
        <h3 className={styles.title}>Our Supply Chain</h3>
        <h5 className={styles.subTitle}>Nohbo is a vertically integrated company </h5>
        <div className={styles.main}>
          <div className={styles.leftContainer}>
            <p>State-of-the-art in-house</p>
            <h4>12,000 sq. ft.</h4>
            <h5>factory & laboratory</h5>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.imageContainer}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={styles.image} src="/images/web.png" alt="web" />
              <div className={styles.lab1}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/chain1.gif" alt="lab1" />
                <p>research</p>
              </div>
              <div className={styles.lab2}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/chain2.gif" alt="lab2" />
                <p>manufacture</p>
              </div>
              <div className={styles.lab3}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/chain3.gif" alt="lab3" />
                <p>package</p>
              </div>
              <div className={styles.lab4}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/chain4.png" alt="lab3" />
                <div>
                  <p>
                    <span className={styles.bold}>Drop</span> manufacturing cap is
                  </p>
                  <p>
                    <span className={styles.bold}>195 million</span> units annually
                  </p>
                </div>
              </div>
              <div className={styles.lab5}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/chain5.png" alt="lab3" />
                <div>
                  <p>
                    <span className={styles.bold}>Slip</span> production cap is
                  </p>
                  <p>
                    <span className={styles.bold}>{'>'}120 million</span> units per month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chain;
