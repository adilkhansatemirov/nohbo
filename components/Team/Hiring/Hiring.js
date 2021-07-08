import styles from 'styles/Team/Hiring/Hiring.module.scss';

function Hiring() {
  return (
    <div className={styles.hiring}>
      <div className={styles.container}>
        <h3 className={styles.title}>We’re Hiring</h3>
        <div className={styles.descriptionContainer}>
          <p>
            If you are seeking challenging work, the entrepreneurial spirit of a fast moving VC-backed startup, and
            ample opportunities for career growth, join our team of creative scientists, hungry entrepreneurs and
            forward looking thought leaders on a mission to shape the future of sustainable personal care products.
          </p>
          <p>
            We’re fearless believers that packaging is antiquated, plastic is unnecessary, and the future of soap and
            personal care stems from our sustainable and groundbreaking packaging inventions that disappear without a
            trace.
          </p>
          <p>
            If our vibrant and mission-driven company culture and entrepreneurial attitude gets you excited, and you
            have relevant experience, shoot us a message at{' '}
            <strong>
              <a href="mailto:careers@nohbo.com">careers@nohbo.com</a>
            </strong>{' '}
            with your CV, or connect with us on
            <strong>
              {' '}
              <a href="https://www.linkedin.com/company/nohbo/about/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>{' '}
            </strong>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hiring;
