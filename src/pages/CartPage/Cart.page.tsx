import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.page.scss';
import { CartItem } from 'components/CartItem/CartItem';
import { CheckoutModal } from 'components/CheckoutModal/CheckoutModal';
import { getHomePath } from 'shared/utils/getRoutes';
import { useAppSelector } from '../../app/providers/store/lib/redux-hooks';
import {
  getCart,
  getTotalPrice,
} from '../../app/providers/store/slices/cart.slice';

const Cart: React.FC = () => {
  const [modal, setModal] = useState(false);

  const { cartItems } = useAppSelector(getCart);
  const totalPrice = useAppSelector(getTotalPrice);

  console.log(cartItems);

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
                {cartItems.map((phone) => {
                  return <CartItem key={phone.phone.id} phone={phone} />;
                })}
              </div>

              <div className="cart__checkout">
                <h2 className="cart__sum">$&nbsp;{totalPrice}</h2>
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
