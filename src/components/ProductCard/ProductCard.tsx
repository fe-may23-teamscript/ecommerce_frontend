import React from 'react';
import './ProductCard.scss';
import imgSrc from 'assets/images/product-card/product-1.png';
import { Phone } from 'app/types/Phone';

type Props = {
  phoneCard: Phone;
};

export const ProductCard: React.FC<Props> = ({ phoneCard }) => {
  const { name, fullPrice, price, screen, capacity, ram } = phoneCard;

  return (
    <div className="card">
      <div className="card__img-container">
        <img
          className="card__img"
          src={imgSrc}
          alt="iPhone"
          width="208px"
          height="196px"
        />
      </div>

      <h2 className="card__title">{name}</h2>

      <p className="card__price">
        <span className="card__price-current">${price}</span>

        <span className="card__price-full">${fullPrice}</span>
      </p>

      <div className="card__features">
        <p className="card__feature">
          <span className="card__feature-name">Screen</span>

          <span className="card__feature-value">{screen}</span>
        </p>

        <p className="card__feature">
          <span className="card__feature-name">Capacity</span>

          <span className="card__feature-value">{capacity}</span>
        </p>

        <p className="card__feature">
          <span className="card__feature-name">RAM</span>

          <span className="card__feature-value">{ram}</span>
        </p>
      </div>

      <div className="card__buy">
        <button className="card__add-to-cart">Add to cart</button>

        <button className="card__favorites-icon"></button>
      </div>
    </div>
  );
};
