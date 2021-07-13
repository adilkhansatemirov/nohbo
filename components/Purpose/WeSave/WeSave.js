import styles from 'styles/Purpose/WeSave/WeSave.module.scss';

const list = [
  {
    id: 1,
    text: '15,590 pounds of water',
    imageSrc: 'drops.png',
  },
  {
    id: 2,
    text: '22,050 pounds of plastic',
    imageSrc: 'bottles.png',
  },
  {
    id: 3,
    text: '220 pounds of preservative',
    imageSrc: 'powder.png',
  },
];

function WeSave() {
  return (
    <section>
      <div className={styles.weSave}>
        <div className={styles.container}>
          <h3 className={styles.title}>Per every 1 million Drops used, we save…</h3>
          <div className={styles.list}>
            {list.map((item) => (
              <div className={styles.item} key={item.id}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={styles.itemImage} src={`/images/${item.imageSrc}`} alt="item" />
                <h4 className={styles.itemText}>{item.text}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.perMillion}>
        <div className={styles.container}>
          <div className={styles.perMillionContainer}>
            <h3 className={styles.perMillionTitle}>Per every 1 million Slips used, we save…</h3>
            <div className={styles.perMillionStats}>
              <div className={styles.perMillionStatsItem}>
                <span>800</span>
                <p>pounds of plastic packaging</p>
              </div>
              <div className={styles.perMillionStatsItem}>
                <span>476</span>
                <p>pounds of shipping weight, equating to hundreds of tons of fuel </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeSave;
