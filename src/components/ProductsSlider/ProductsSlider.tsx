import React, { useState } from 'react';
import classNames from 'classnames';
import './ProductsSlider.scss';
import { ProductCard } from 'components/ProductCard/ProductCard';
import phones from 'api/phones.json';

type Props = {
  title: string;
};

export const ProductsSlider: React.FC<Props> = ({ title }) => {
  const visibleCount = 4;
  const [start, setStart] = useState(0);
  const end = start + visibleCount;

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
                  end > phones.length - 1,
              },
            )}
            onClick={() => setStart((prev) => prev + 1)}
            disabled={end === 0}
          ></button>
        </div>
      </div>

      <div className="products-slider__content">
        {phones.slice(start, end).map((phone) => (
          <ProductCard phoneCard={phone} key={phone.id} />
        ))}
      </div>
    </section>
  );
};
