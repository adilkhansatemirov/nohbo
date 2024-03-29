import { useEffect, useState } from 'react';
import styles from 'styles/Nav/Nav.module.scss';
import Link from 'next/link';

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

function Nav() {
  const [isScrollOnTop, setIsScrollOnTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsScrollOnTop(true);
        return;
      }

      if (window.scrollY > 0 && isScrollOnTop) {
        setIsScrollOnTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrollOnTop]);

  return (
    <div className={`${styles.nav} ${!isScrollOnTop ? styles.nav__shrinked : ''}`}>
      <div className={styles.nav__container}>
        <div className={styles.navImageConainer}>
          <Link href="/">
            <a>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/nav-logo.png" alt="Vercel Logo" />
            </a>
          </Link>
        </div>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li className={styles.navItem} key={item.id}>
              <Link href={item.href}>
                <a>{item.text}</a>
              </Link>
            </li>
          ))}
        </ul>
        <button className={styles.hamburger} onClick={() => setIsMobileMenuOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`${styles.nav__mobileMenu} ${isMobileMenuOpen && styles.nav__mobileMenuOpen}`}>
          <ul>
            {navItems.map((item) => (
              <li className={styles.navItemMobile} key={item.id}>
                <Link href={item.href}>
                  <a>{item.text}</a>
                </Link>
              </li>
            ))}
          </ul>
          <button className={styles.closeButton} onClick={() => setIsMobileMenuOpen(false)}></button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
