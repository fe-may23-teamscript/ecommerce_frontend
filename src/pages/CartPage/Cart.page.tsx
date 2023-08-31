import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.page.scss';
import { CartItem } from 'components/CartItem/CartItem';
import { CheckoutModal } from 'components/CheckoutModal/CheckoutModal';
import { getHomePath } from 'shared/utils/getRoutes';

const Cart: React.FC = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="cart">
      <div className="container">
        <Link to={getHomePath()} className="cart__link">
          Back
        </Link>

        <h1 className="cart__title">Cart</h1>

        <div className="cart__content">
          {modal ? (
            <CheckoutModal />
          ) : (
            <>
              <div className="cart__list">
                <CartItem />
              </div>

              <div className="cart__checkout">
                <h2 className="cart__sum">$ 2657</h2>
                <p className="cart__total-items">Total for 3 items</p>
                <button className="cart__btn" onClick={() => setModal(true)}>
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
