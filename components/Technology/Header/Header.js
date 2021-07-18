import styles from 'styles/Technology/Header/Header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.main}>
          <h3 className={styles.upperTitle}>NOHBO TECHNOLOGY</h3>
          <h1 className={styles.title}>Single-Use Water Soluble Solutions </h1>
          <h4 className={styles.subTitle}>Using Material Science Innovations to Solve the Plastic Waste Problem</h4>
        </div>
        <div className={styles.imageContainer}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.image} src="/images/home_stand.png" alt="home-stand" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.imageDrop1} src="/images/home_drop1.png" alt="home_drop1" />
          <div className={styles.imageDrop1Shadow}></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.imageDrop2} src="/images/home_drop2.png" alt="home_drop2" />
          {/* <div className={styles.imageDrop2Shadow}></div> */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.imageDrop3} src="/images/home_drop3.png" alt="home_drop3" />
          <div className={styles.imageDrop3Shadow}></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.imageDrop4} src="/images/home_drop4.png" alt="home_drop4" />
          <div className={styles.imageDrop4Shadow}></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
