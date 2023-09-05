import React, { useState } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import './Cart.page.scss';
import { CartItem } from 'components/CartItem/CartItem';
import { CheckoutModal } from 'components/CheckoutModal';
import { getHomePath } from 'shared/utils/getRoutes';
import {
  useAppSelector,
  useAppDispatch,
} from '../../app/providers/store/lib/redux-hooks';
import {
  getCart,
  getTotalPrice,
  getTotalCount,
  clearCart,
} from '../../app/providers/store/slices/cart.slice';

const Cart: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();

  const { cartItems } = useAppSelector(getCart);
  const totalPrice = useAppSelector(getTotalPrice);
  const totalCount = useAppSelector(getTotalCount);

  const handleClearCart = () => {
    dispatch(clearCart());
    setShowModal(true);
  };

  return (
    <div className="cart">
      <div className="container">
        <Link to={getHomePath()} className="cart__link">
          Back
        </Link>

        <h2 className="cart__title">Cart</h2>

        {showModal ? (
          <CheckoutModal setShowModal={setShowModal} />
        ) : (
          <div className="cart__content">
            <div className="cart__list">
              {totalCount === 0 ? (
                <p className="cart__text">Your cart is empty</p>
              ) : (
                <>
                  {cartItems.map((phone) => {
                    return <CartItem key={phone.phone.id} phone={phone} />;
                  })}
                </>
              )}
            </div>

            <div className="cart__checkout">
              <h2 className="cart__sum">$&nbsp;{totalPrice}</h2>
              <p className="cart__total-items">{`Total for ${totalCount} items`}</p>
              <button
                className={cn('cart__btn', {
                  'cart__btn--disabled': totalCount === 0,
                })}
                onClick={handleClearCart}
                disabled={totalCount === 0}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
