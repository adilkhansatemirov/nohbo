import { useEffect, useState } from 'react';
import NavStyles from 'styles/Nav/Nav.module.scss';
import Image from 'next/image';
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
    <div className={`${NavStyles.nav} ${!isScrollOnTop ? NavStyles.nav__shrinked : ''}`}>
      <div className={NavStyles.nav__container}>
        <div className={NavStyles.navImageConainer}>
          <Image
            src="/images/nav-logo.png"
            alt="Vercel Logo"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
        <ul className={NavStyles.navList}>
          {navItems.map((item) => (
            <li className={NavStyles.navItem} key={item.id}>
              <Link href={item.href}>
                <a>{item.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
