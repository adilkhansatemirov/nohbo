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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.image} src="/images/products-on-table.png" alt="products-on-table" />
      </div>
    </div>
  );
}

export default Header;
