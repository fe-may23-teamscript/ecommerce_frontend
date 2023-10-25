import React, { useEffect, useState, useRef } from 'react';
import cn from 'classnames';
import './ProductsSlider.scss';
import { ProductCard } from 'components/ProductCard/ProductCard';
import { IProductModel } from 'models/IProductModel';
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg';
import { Loader } from 'components/Loader';

type Props = {
  title: string;
  products?: IProductModel[];
};

export const ProductsSlider: React.FC<Props> = ({ title, products }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const setOrUpdateMaxScroll = () => {
      if (containerRef.current) {
        const scrollWidth = containerRef.current?.scrollWidth;
        const offsetWidth = containerRef.current?.offsetWidth;
        const maxScrollValue = scrollWidth - offsetWidth;

        setMaxScroll(maxScrollValue);
      }
    };

    setOrUpdateMaxScroll();
    window.addEventListener('resize', setOrUpdateMaxScroll);
  }, [products]);

  if (!products) {
    return <Loader />;
  }

  const handleScrollLeft = () => {
    if (containerRef.current) {
      const current = containerRef.current as HTMLDivElement;

      if (current.scrollLeft && current.offsetWidth) {
        current.scrollTo({
          left: current.scrollLeft - current.offsetWidth / 2,
          behavior: 'smooth',
        });
      }
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      const current = containerRef.current as HTMLDivElement;

      if (current.scrollLeft != null && current.offsetWidth) {
        current.scrollTo({
          left: current.scrollLeft + current.offsetWidth / 2,
          behavior: 'smooth',
        });
      }
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      setScrollPosition(+containerRef.current?.scrollLeft);
    }
  };

  return (
    <div className="slider">
      <div className="slider__top">
        <h2 className="slider__title">{title}</h2>

        <div className="slider__buttons">
          <div
            className={cn('slider__button', {
              'slider__button-left--disabled': scrollPosition === 0,
            })}
            onClick={handleScrollLeft}
          >
            <ArrowLeft
              className={cn('slider__icon', {
                'slider__icon-left--disabled': scrollPosition === 0,
              })}
            />
          </div>

          <div
            className={cn('slider__button', {
              'slider__button-right--disabled':
                maxScroll - scrollPosition <= 10,
            })}
            onClick={handleScrollRight}
          >
            <ArrowRight
              className={cn('slider__icon', {
                'slider__icon-right--disabled':
                  maxScroll - scrollPosition <= 10,
              })}
            />
          </div>
        </div>
      </div>
      <div
        className="slider__bottom"
        ref={containerRef}
        onScroll={handleScroll}
      >
        <div className="slider__slider">
          {products.map((product) => (
            <div className="slider__card" key={product.id}>
              <ProductCard productCard={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
