import styles from 'styles/Press/Header/Header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>See What’s Droppin’</h1>
      </div>
    </div>
  );
}

export default Header;
