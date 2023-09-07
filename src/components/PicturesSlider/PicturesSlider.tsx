import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import './PicturesSlider.scss';
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRigth } from 'assets/icons/arrow-right.svg';
import banner1 from 'assets/images/pictures-slider/banner-1.png';
import banner2 from 'assets/images/pictures-slider/banner-2.png';
import banner3 from 'assets/images/pictures-slider/banner-3.png';
import banner4 from 'assets/images/pictures-slider/banner-4.png';

const images = [banner1, banner2, banner3, banner4];

export const PicturesSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleArrowLeft = () => setActiveIndex((prevState) => prevState - 1);
  const handleArrowRight = () => setActiveIndex((prevState) => prevState + 1);
  const handlePagination = (index: number) => setActiveIndex(index);

  useEffect(() => {
    if (activeIndex > images.length - 1) {
      setActiveIndex(0);
    }

    if (activeIndex < 0) {
      setActiveIndex(images.length - 1);
    }
  }, [activeIndex, images]);

  useEffect(() => {
    const interval = setInterval(
      () => setActiveIndex((prevState) => prevState + 1),
      5000,
    );

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="carousel">
      <h1 className="carousel__title">Welcome to Nice Gadgets store!</h1>
      <div className="carousel__box">
        <div className="carousel__row">
          {images.map((image, index) => (
            <img
              src={image}
              alt={image}
              key={image}
              className={cn('carousel__img', {
                'carousel__img--active': activeIndex === index,
              })}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={handleArrowLeft}
          className="carousel__button carousel__button--prev"
        >
          <ArrowLeft className="carousel__icon" />
        </button>
        <button
          type="button"
          onClick={handleArrowRight}
          className="carousel__button carousel__button--next"
        >
          <ArrowRigth className="carousel__icon" />
        </button>
      </div>
      <div className="carousel__pagination-box">
        {images.map((image, index) => (
          <button
            type="button"
            aria-label="pagination-item"
            key={image}
            className={cn('carousel__item-btn', {
              'carousel__item-btn--active': activeIndex === index,
            })}
            onClick={() => handlePagination(index)}
          />
        ))}
      </div>
    </div>
  );
};
