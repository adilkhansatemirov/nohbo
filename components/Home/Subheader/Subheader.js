import { useEffect, useRef } from 'react';
import SubheaderStyles from 'styles/Home/Subheader/Subheader.module.scss';

function Subheader() {
  const dropElement = useRef(null);

  useEffect(() => {
    dropElement.current.style.top = '0px';
    const handleScroll = () => {
      if (window.scrollY > 300 && window.scrollY < 370) {
        dropElement.current.style.top = `${Math.abs(300 - window.scrollY)}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={SubheaderStyles.subheader}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img ref={dropElement} className={SubheaderStyles.subheader__dropImage} src="/images/drop.png" alt="drop" />
      <div className={SubheaderStyles.subheader__description__container}>
        <h2 className={SubheaderStyles.subheader__description}>
          At Nohbo, we develop and commercialize cutting-edge plastic waste-free consumer good products that dissolve
          without a trace.
        </h2>
      </div>
    </div>
  );
}

export default Subheader;
