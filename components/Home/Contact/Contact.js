import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from 'styles/Home/Contact/Contact.module.scss';

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <ScrollAnimation animateIn="fadeIn" animateOnce>
          <h3 className={styles.title}>Contact Us</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce>
          <p className={styles.description}>
            Looking to collaborate or curious about our technology? Feel free to drop us a note.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce>
          <Link href="/contact-us">
            <a>
              <button className={styles.button}>Message Us</button>
            </a>
          </Link>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Contact;
