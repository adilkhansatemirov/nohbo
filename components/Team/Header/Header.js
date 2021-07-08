import styles from 'styles/Team/Header/Header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Our Team</h1>
      </div>
    </div>
  );
}

export default Header;
