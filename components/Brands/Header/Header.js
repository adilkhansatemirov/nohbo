import styles from 'styles/Brands/Header/Header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>New Brand Coming Soon</h1>
      </div>
    </div>
  );
}

export default Header;
