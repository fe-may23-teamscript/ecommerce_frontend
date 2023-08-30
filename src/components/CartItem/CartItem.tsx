import React from 'react';
import './CartItem.scss';
import phoneImg from 'assets/images/product-card/product-1.png';

export const CartItem: React.FC = () => (
  <div className="cart-item">
    <div className="cart-item__info">
      <button className="icon icon__cart-item icon__cart-item--close"></button>

      <div className="cart-item__description">
        <img className="cart-item__img" src={phoneImg} alt="phone" />
        <p className="cart-item__title">
          Apple iPhone 14 Pro 128GB Silver (MQ023)
        </p>
      </div>
    </div>

    <div className="cart-item__price-block">
      <div className="cart-item__icons-block">
        <button className="icon icon__cart-item icon__cart-item--minus"></button>
        <div className="cart-item__counter">1</div>
        <button
          className="icon
              icon__cart-item
              icon__cart-item--plus"
        ></button>
      </div>

      <div className="cart-item__price">$ 999</div>
    </div>
  </div>
);
