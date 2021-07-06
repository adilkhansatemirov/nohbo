import styles from 'styles/ContactUs/DropLine/DropLine.module.scss';

function DropLine() {
  return (
    <div className={styles.dropLine}>
      <h1 className={styles.title}>Drop Us a Line</h1>
      <h3 className={styles.subtitle}>
        Looking to collaborate or curious to learn more?
        <br />
        Send us a note.
      </h3>
      <p className={styles.email}>info@nohbo.com</p>
      <p className={styles.number}>+1 (321) 345-5319</p>
      <p className={styles.address}>1581 Robert J Conlan Blvd NE., Suite 100 Palm Bay, FL 32905</p>
    </div>
  );
}

export default DropLine;
