import Nav from 'components/Nav/Nav';
// import Image from 'next/image';

import HeaderStyles from 'styles/Home/Header/Header.module.scss';

function Header() {
  return (
    <div className={HeaderStyles.header}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={HeaderStyles.header__waterImage} src="/images/water.webp" alt="water" />
      <Nav />
      <h1 className={HeaderStyles.header__title}>Ridding the world of unnecessary plastics</h1>
    </div>
  );
}

export default Header;
