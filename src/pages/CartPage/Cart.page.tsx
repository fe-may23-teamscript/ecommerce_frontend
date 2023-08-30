import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.page.scss';
import { CartItem } from 'components/CartItem/CartItem';

const Cart: React.FC = () => (
  <div className="cart">
    <div className="container">
      <Link to="/" className="cart__link">
        Back
      </Link>

      <h1 className="cart__title">Cart</h1>

      <div className="cart__content">
        <div className="cart__list">
          <CartItem />
        </div>

        <div className="cart__checkout">
          <h2 className="cart__sum">$ 2657</h2>
          <p className="cart__total-items">Total for 3 items</p>
          <button className="cart__btn">Checkout</button>
        </div>
      </div>
    </div>
  </div>
);

export default Cart;
