import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from 'styles/Home/Buzz/Buzz.module.scss';

function Buzz() {
  return (
    <section className={styles.buzz}>
      <ScrollAnimation animateIn="fadeIn" animateOnce>
        <h3 className={styles.title}>The Buzz</h3>
        <Link href="/press">
          <a>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.image} src="/images/buzz.png" alt="buzz" />
          </a>
        </Link>
      </ScrollAnimation>
    </section>
  );
}

export default Buzz;
