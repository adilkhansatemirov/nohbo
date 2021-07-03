import styles from 'styles/Home/Products/Products.module.scss';

function Products() {
  return (
    <section className={styles.container}>
      <div className={styles.item}>
        <div className={styles.image__container}>
          <div className={styles.left_lines_top}></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.image__many_drops} src="/images/many-drops.png" alt="many-drops" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.image__one_drop} src="/images/one-drop.png" alt="one-drop" />
          <div className={styles.left_lines_bottom}></div>
        </div>
        <div className={styles.text__container}>
          <div className={`${styles.right_lines_top} ${styles.border_right}`}></div>
          <h3 className={styles.title}>Drops</h3>
          <h5 className={styles.subtitle}>
            A single-use ‘pod’ containing the perfect dosage of a personal care product. Just add water, watch the outer
            wrap disappear in seconds (not years).
          </h5>
          <p className={styles.description}>
            Our customizable personal care Drops are currently offered in Shampoo, Conditioner, or Body Wash formats.
          </p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text__container}>
          <div className={`${styles.right_lines_top} ${styles.border_left}`}></div>
          <h3 className={styles.title}>Slips</h3>
          <h5 className={styles.subtitle}>
            A single-use sheet of magic. Just add water and watch as the film hydrates instantly, unleashing its
            powerful actives while leaving no trace behind.
          </h5>
          <p className={styles.description}>
            Our Hand Soap Slips melt before your eyes, forming copious amounts of lather. Hand soap is just the start
            for us!
          </p>
        </div>
        <div className={styles.image__container}>
          <div className={styles.left_lines_top}></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.image__many_drops} src="/images/many-drops.png" alt="many-drops" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.image__one_drop} src="/images/one-drop.png" alt="one-drop" />
          <div className={styles.left_lines_bottom}></div>
        </div>
      </div>
    </section>
  );
}

export default Products;
