import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import './ProductsSlider.scss';
import { ProductCard } from 'components/ProductCard/ProductCard';
import { IProductModel } from 'models/IProductModel';
import { ReactComponent as ArrowLeftDisabled } from 'assets/icons/arrow-left-disabled.svg';
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRightDisabled } from 'assets/icons/arrow-right-disabled.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg';
import { Loader } from 'components/Loader';

type Props = {
  title: string;
  phones?: IProductModel[];
};

export const ProductsSlider: React.FC<Props> = ({ title, phones }) => {
  const [start, setStart] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [visibleCount, setVisibleCount] = useState(1);
  const end = start + visibleCount;

  const handleResize = () => {
    setWindowWidth(() => window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    if (windowWidth >= 640 && windowWidth < 896) {
      setVisibleCount(2);
    }

    if (windowWidth >= 896 && windowWidth < 1200) {
      setVisibleCount(3);
    }

    if (windowWidth >= 1200) {
      setVisibleCount(4);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  if (!phones) {
    return <Loader />;
  }

  return (
    <section className="cards-slider">
      <div className="products-slider__top">
        <h2 className="products-slider__title">{title}</h2>
        <div className="products-slider__buttons">
          <button
            className={cn('products-slider__button', {
              'products-slider__button--disabled': start <= 0,
            })}
            onClick={() => setStart((prev) => prev - 1)}
            disabled={start === 0}
          >
            {start === 0 && (
              <ArrowLeftDisabled className="products-slider__icon--disabled" />
            )}
            {start !== 0 && <ArrowLeft className="products-slider__icon" />}
          </button>

          <button
            className={cn('products-slider__button', {
              'products-slider__button--disabled': end === phones.length - 1,
            })}
            onClick={() => setStart((prev) => prev + 1)}
            disabled={end === phones.length - 1}
          >
            {end !== phones.length - 1 && (
              <ArrowRight className="products-slider__icon" />
            )}
            {end === phones.length - 1 && (
              <ArrowRightDisabled className="products-slider__icon--disabled" />
            )}
          </button>
        </div>
      </div>

      <div className="products-slider__content">
        {phones.slice(start, end).map((item) => (
          <ProductCard productCard={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};
