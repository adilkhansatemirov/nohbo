import styles from 'styles/Technology/Possible/Possible.module.scss';

function Possible() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>How is This Possible?</h3>
      <div className={styles.lab1}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/lab4.png" alt="lab" />
        <div className={styles.lab1TextContainer}>
          <h5>Anhydrous Chassis</h5>
          <p>
            Traditional personal care products are made up of 60-90% water; a precious material viewed as vital to
            suspend, solubilize or act as a filler for personal care product active ingredients. In layman’s terms,
            utilizing earth derived compounds and novel green chemistry practices, we’ve figured out how to suspend and
            emulsify personal care actives in safe, compatible waterless bases that are as good to the user as they are
            to our planet.
          </p>
        </div>
      </div>
      <div className={styles.lab2}>
        <div className={styles.lab2TextContainer}>
          <h5>Water Soluble Film i.e., “The Wrap”</h5>
          <p>
            Water soluble films are core and center to what we do. They act like a fish net in our formulations;
            everything inside “the fish” gets trapped in our polymer film “the net” due to its large molecular weight.
            Water is a universal solvent, so it eats through the outside of the membrane, allowing actives to be
            released. We create, build, and scale biodegradable and sustainable water soluble films to meet the demands
            of the consumer good and personal care industry.
          </p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/lab5.png" alt="lab" />
      </div>
    </div>
  );
}

export default Possible;
