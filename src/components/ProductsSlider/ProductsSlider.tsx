import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './ProductsSlider.scss';
import { ProductCard } from 'components/ProductCard/ProductCard';
import { IProductModel } from 'models/IProductModel';

type Props = {
  title: string;
  products: IProductModel[];
};

export const ProductsSlider: React.FC<Props> = ({ title, products }) => {
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

  return (
    <section className="page__section cards-slider">
      <div className="products-slider__top">
        <h2 className="page__section-title products-slider__title">{title}</h2>
        <div className="products-slider__buttons">
          <button
            className={classNames(
              'products-slider__button products-slider__button--left',
              { 'products-slider__button--left--disabled': start <= 0 },
            )}
            onClick={() => setStart((prev) => prev - 1)}
            disabled={start === 0}
          ></button>

          <button
            className={classNames(
              'products-slider__button products-slider__button--right',
              {
                'products-slider__button--right--disabled':
                  end > products.length - 1 - visibleCount,
              },
            )}
            onClick={() => setStart((prev) => prev + 1)}
            disabled={end === products.length - 1}
          ></button>
        </div>
      </div>

      <div className="products-slider__content">
        {products.slice(start, end).map((item) => (
          <ProductCard productCard={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};
