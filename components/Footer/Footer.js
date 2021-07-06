import Link from 'next/link';
import styles from 'styles/Home/Footer/Footer.module.scss';

const navItems = [
  {
    id: 1,
    text: 'Home',
    href: '/content',
  },
  {
    id: 2,
    text: 'Purpose',
    href: '/content',
  },
  {
    id: 3,
    text: 'Technology',
    href: '/content',
  },
  {
    id: 4,
    text: 'Brands',
    href: '/content',
  },
  {
    id: 5,
    text: 'Team',
    href: '/content',
  },
  {
    id: 6,
    text: 'Press',
    href: '/content',
  },
  {
    id: 7,
    text: 'Contact Us',
    href: '/content',
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoNav}>
          <h3 className={styles.logo}>Nohbo, Inc.</h3>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li className={styles.navItem} key={item.id}>
                <Link href={item.href}>
                  <a>{item.text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.social}>
          <a>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/twitter.svg" alt="twitter" />
          </a>
          <a>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/linkedin.svg" alt="linkedin" />
          </a>
          <a>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/facebook.svg" alt="facebook" />
          </a>
        </div>
        <p className={styles.email}>
          <a>info@nohbo.com</a>
        </p>
        <p className={styles.phone}>
          <a>+1 (321) 345-5319</a>
        </p>
        <p className={styles.address}>1581 Robert J Conlan Blvd NE., Suite 100 Palm Bay, FL 32905</p>
        <div className={styles.copyright}>
          <p>© 2021 Nohbo</p>
          <p>Patented & Patent Pending | US + Worldwide</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
