import React from 'react';
import './ProductCard.scss';
import imgSrc from 'assets/images/product-card/product-1.png';
import { IPhone } from 'models/IPhone';
import { useAppDispatch, useAppSelector } from 'app/providers/store/lib/redux-hooks';
import { addToCart, getCart } from 'app/providers/store/slices/cart.slice';

type Props = {
  phoneCard: IPhone;
};

export const ProductCard: React.FC<Props> = ({ phoneCard }) => {
  const { id, name, priceRegular, priceDiscount, screen, capacity, ram } = phoneCard;

  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector(getCart);

  const isInCart = Boolean(cartItems.find(({ phone }) => phone.id === id));

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
        <button
          disabled={isInCart}
          className="card__add-to-cart" // use classnames for changing styles
          onClick={() => dispatch(addToCart(phoneCard))}
        >Add to cart</button>

        <button className="card__favorites-icon"></button>
      </div>
    </div>
  );
};
