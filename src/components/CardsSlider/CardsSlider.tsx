import React from 'react';
import './CardsSlider.scss';
import { ProductCard } from 'components/ProductCard/ProductCard';

type Props = {
  title: string;
};

export const CardsSlider: React.FC<Props> = ({ title }) => {
  return (
    <section className="page__section cards-slider">
      <h2 className="page__section-title cards-slider__title">{title}</h2>
      <div className="cards-slider__content">
        <ProductCard />
      </div>
    </section>
  );
};
