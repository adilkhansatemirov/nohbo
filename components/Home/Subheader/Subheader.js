import { useEffect, useRef } from 'react';
import SubheaderStyles from 'styles/Home/Subheader/Subheader.module.scss';

function Subheader() {
  const dropElement = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350 && window.scrollY < 400) {
        // console.log('dropElement.current.style', dropElement.current.style.top);
        console.log('window.scrollY', 400 - window.scrollY);
        dropElement.current.style.top = 400 - window.scrollY;
      }
      //   console.log('window.scrollY', window.scrollY);
      //   if (window.scrollY === 0) {
      //     setIsScrollOnTop(true);
      //     console.log('setIsScrollOnTop(true);');
      //     return;
      //   }
      //   if (window.scrollY > 0 && isScrollOnTop) {
      //     setIsScrollOnTop(false);
      //     console.log('setIsScrollOnTop(false);');
      //   }
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
