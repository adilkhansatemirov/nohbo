import Link from 'next/link';
import styles from 'styles/Home/Footer/Footer.module.scss';

const navItems = [
  {
    id: 1,
    text: 'Home',
    href: '/',
  },
  {
    id: 2,
    text: 'Purpose',
    href: '/purpose',
  },
  {
    id: 3,
    text: 'Technology',
    href: '/technology',
  },
  {
    id: 4,
    text: 'Brands',
    href: '/brands',
  },
  {
    id: 5,
    text: 'Team',
    href: '/team',
  },
  {
    id: 6,
    text: 'Press',
    href: '/press',
  },
  {
    id: 7,
    text: 'Contact Us',
    href: '/contact-us',
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
          <a href="https://twitter.com/nohbodrops" target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/twitter.svg" alt="twitter" />
          </a>
          <a href="https://www.linkedin.com/company/nohbo/mycompany" target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/linkedin.svg" alt="linkedin" />
          </a>
        </div>
        <p className={styles.email}>
          <a>info@nohbo.com</a>
        </p>
        <p className={styles.address}>1581 Robert J Conlan Blvd NE., Suite 100, Palm Bay, FL 32905</p>
        <div className={styles.copyright}>
          <p>© 2021 Nohbo</p>
          <p>Patented & Patent Pending | US + Worldwide</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
