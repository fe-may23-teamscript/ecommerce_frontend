import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';
import imgSrc from 'assets/images/product-card/product-1.png';
import { IProductModel } from 'models/IProductModel';
import { getDevicePath } from 'shared/utils/getRoutes';

type Props = {
  productCard: IProductModel;
};

export const ProductCard: React.FC<Props> = ({ productCard }) => {
  const {
    name,
    slug,
    category,
    priceRegular,
    priceDiscount,
    screen,
    capacity,
    ram,
  } = productCard;

  return (
    <div className="card">
      <div className="card__img-container">
        <Link to={`/${getDevicePath(category, slug)}`}>
          <img
            className="card__img"
            src={imgSrc}
            alt="iPhone"
            width="208px"
            height="196px"
          />
        </Link>
      </div>

      <h2 className="card__title">{name}</h2>

      <p className="card__price">
        <span className="card__price-current">${priceDiscount}</span>

        <span className="card__price-full">${priceRegular}</span>
      </p>

      <div className="card__features">
        <p className="card__feature">
          <span className="card__feature-name">Screen</span>

          <span className="card__feature-value">
            {/* eslint-disable */}
            {screen.split("'").join('” ')}
            {/* eslint-enable */}
          </span>
        </p>

        <p className="card__feature">
          <span className="card__feature-name">Capacity</span>

          <span className="card__feature-value">{`${parseInt(
            capacity,
          )} GB`}</span>
        </p>

        <p className="card__feature">
          <span className="card__feature-name">RAM</span>

          <span className="card__feature-value">{`${parseInt(ram)} GB`}</span>
        </p>
      </div>

      <div className="card__buy">
        <button className="card__add-to-cart">Add to cart</button>

        <button className="card__favorites-icon"></button>
      </div>
    </div>
  );
};
