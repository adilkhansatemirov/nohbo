import styles from 'styles/Technology/Products/Products.module.scss';

function Products() {
  return (
    <div className={styles.container}>
      <div className={styles.dropsContainer}>
        <div className={styles.dropsImagesContainer}>
          <div className={styles.dropsImagesItem}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/drop-white.png" alt="drop-white" />
            <p>Biodegradable film &quot;the wrap&quot;</p>
          </div>
          <div className={styles.dropsImagesItem}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/liquid.png" alt="liquid" />
            <p>Anhydrous (water-free) liquid base</p>
          </div>
        </div>
        <div className={styles.dropsTextContainer}>
          <h3>Personal Care Drops</h3>
          <p>
            Patented anhydrous liquid chassis comprised of naturally derived esters & diols + water soluble film in a
            thermo/solvent sealed pod​​
          </p>
        </div>
      </div>

      <div className={styles.slipsContainer}>
        <div className={styles.slipsTextContainer}>
          <h3>Slips</h3>
          <p>Sheets of water-soluble film loaded with powerful actives that pack a punch​​</p>
        </div>
        <div className={styles.slipsImagesContainer}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/slip.png" alt="drop-white" />
          <p>Emulsified water-soluble film embedded with personal care actives</p>
        </div>
      </div>
    </div>
  );
}

export default Products;
