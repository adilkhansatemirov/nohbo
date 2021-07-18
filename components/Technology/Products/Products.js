import ScrollAnimation from 'react-animate-on-scroll';
import styles from 'styles/Technology/Products/Products.module.scss';

function Products() {
  return (
    <div className={styles.container}>
      <div className={styles.dropsContainer}>
        <div className={styles.dropsImagesContainer}>
          <div className={styles.dropsImagesItem}>
            <ScrollAnimation animateIn="fadeIn" animateOnce>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/drop-white.png" alt="drop-white" />
              <p>Biodegradable film &quot;the wrap&quot;</p>
            </ScrollAnimation>
          </div>
          <div className={styles.dropsImagesItem}>
            <ScrollAnimation animateIn="fadeIn" animateOnce delay={300}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/liquid.png" alt="liquid" />
              <p>Anhydrous (water-free) liquid base</p>
            </ScrollAnimation>
          </div>
        </div>
        <div className={styles.dropsTextContainer}>
          <ScrollAnimation animateIn="fadeInRight" animateOnce>
            <h3>Personal Care Drops</h3>
            <p>
              Patented anhydrous liquid chassis comprised of naturally derived esters & diols + water soluble film in a
              thermo/solvent sealed pod​​
            </p>
          </ScrollAnimation>
        </div>
      </div>

      <div className={styles.slipsContainer}>
        <div className={styles.slipsTextContainer}>
          <ScrollAnimation animateIn="fadeInLeft" animateOnce>
            <h3>Slips</h3>
            <p>Sheets of water-soluble film loaded with powerful actives that pack a punch​​</p>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn="fadeInRight" animateOnce>
          <div className={styles.slipsImagesContainer}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/slip.png" alt="drop-white" />
            <p>Emulsified water-soluble film embedded with personal care actives</p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Products;
