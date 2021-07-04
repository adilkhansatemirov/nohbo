import styles from 'styles/Home/Contact/Contact.module.scss';

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <h3 className={styles.title}>Contact Us</h3>
        <p className={styles.description}>
          Looking to collaborate or curious about our technology? Feel free to drop us a note.
        </p>
        <button className={styles.button}>Message Us</button>
      </div>
    </div>
  );
}

export default Contact;
