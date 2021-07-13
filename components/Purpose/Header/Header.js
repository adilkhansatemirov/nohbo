import styles from 'styles/Purpose/Header/Header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>We’re on a mission </h1>
      </div>
    </div>
  );
}

export default Header;
