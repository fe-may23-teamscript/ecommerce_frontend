import React, { useEffect, useState } from 'react';
import './PicturesSlider.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import banner1 from 'assets/images/welcome-banner/banner.png';
import bannerMob1 from 'assets/images/welcome-banner/banner-mobile.png';
import banner2 from 'assets/images/welcome-banner/banner-2.png';
import bannerMob2 from 'assets/images/welcome-banner/banner-mobile-2.png';
import banner3 from 'assets/images/welcome-banner/banner-3.png';
import bannerMob3 from 'assets/images/welcome-banner/banner-mobile-3.png';

export const PicturesSlider: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="page__section welcome">
      <h1 className="page__section-title welcome__title">
        Welcome to Nice Gadgets store!
      </h1>
      <div className="welcome__slider">
        <Carousel showStatus={false} showThumbs={false} showArrows={true}>
          <div>
            {isMobile ? (
              <img src={bannerMob1} alt="banner" />
            ) : (
              <img src={banner1} alt="banner" />
            )}
          </div>
          <div>
            {isMobile ? (
              <img src={bannerMob2} alt="banner" />
            ) : (
              <img src={banner2} alt="banner" />
            )}
          </div>
          <div>
            {isMobile ? (
              <img src={bannerMob3} alt="banner" />
            ) : (
              <img src={banner3} alt="banner" />
            )}
          </div>
        </Carousel>
      </div>
    </section>
  );
};
