import React from 'react';
import './PicturesSlider.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import banner1 from 'assets/images/pictures-slider/banner-1.png';
import banner2 from 'assets/images/pictures-slider/banner-2.png';
import banner3 from 'assets/images/pictures-slider/banner-3.png';
import banner4 from 'assets/images/pictures-slider/banner-4.png';

export const PicturesSlider: React.FC = () => {
  return (
    <section className="page__section pictures-slider">
      <h1 className="page__section-title pictures-slider__title">
        Welcome to Nice Gadgets store!
      </h1>
      <div className="pictures-slider__slider">
        <Carousel
          showStatus={false}
          showThumbs={false}
          showArrows={true}
          autoPlay={true}
          interval={5000}
          infiniteLoop={true}
        >
          <div className="pictures-slider__slider-item">
            <img
              className="pictures-slider__slider-img"
              src={banner1}
              alt="banner"
            />
          </div>
          <div className="pictures-slider__slider-item">
            <img
              className="pictures-slider__slider-img"
              src={banner2}
              alt="banner"
            />
          </div>
          <div className="pictures-slider__slider-item">
            <img
              className="pictures-slider__slider-img"
              src={banner3}
              alt="banner"
            />
          </div>
          <div className="pictures-slider__slider-item">
            <img
              className="pictures-slider__slider-img"
              src={banner4}
              alt="banner"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
