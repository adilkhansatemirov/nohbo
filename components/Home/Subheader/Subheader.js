import { useEffect, useRef } from 'react';
import styles from 'styles/Home/Subheader/Subheader.module.scss';

function Subheader() {
  const dropElement = useRef(null);

  useEffect(() => {
    dropElement.current.style.top = '0px';
    const handleScroll = () => {
      if (window.scrollY > 250 && window.scrollY < 400) {
        dropElement.current.style.top = `${Math.abs(250 - window.scrollY)}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={styles.subheader}>
      <div className={styles.imageContainer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img ref={dropElement} className={styles.subheader__dropImage} src="/images/drop.png" alt="drop" />
      </div>
      <div className={styles.subheader__description__container}>
        <h2 className={styles.subheader__description}>
          At Nohbo, we develop and commercialize cutting-edge plastic waste-free consumer good products that dissolve
          without a trace.
        </h2>
      </div>
    </section>
  );
}

export default Subheader;
