import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import './PicturesSlider.scss';
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg';
import { images } from './images';
import { getCatalog } from 'shared/utils/getRoutes';
import { useTranslation } from 'react-i18next';

export const PicturesSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const { t } = useTranslation();

  const handleArrowLeft = () => {
    return setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1,
    );
  };
  const handleArrowRight = () => {
    return setActiveIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1,
    );
  };
  const handlePagination = (index: number) => setActiveIndex(index);

  useEffect(() => {
    const interval = setInterval(() => handleArrowRight(), 5000);

    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touchX = e.touches[0].clientX;
    const deltaX = touchX - touchStartX;

    if (deltaX < 0) {
      handleArrowRight();
    } else if (deltaX > 0) {
      handleArrowLeft();
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(0);
  };

  return (
    <div className="carousel">
      <h1 className="carousel__title">{t('title')}</h1>
      <div
        className="carousel__box"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="carousel__row">
          {images.map((image, index) => (
            <Link
              key={image.src}
              to={getCatalog(image.category)}
              className="carousel__img-link"
            >
              <img
                src={image.src}
                alt={image.src}
                className={cn('carousel__img', {
                  'carousel__img--active': activeIndex === index,
                })}
              />
            </Link>
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
          <ArrowRight className="carousel__icon" />
        </button>
      </div>
      <div className="carousel__pagination-box">
        {images.map((image, index) => (
          <button
            type="button"
            aria-label="pagination-item"
            key={image.src}
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
