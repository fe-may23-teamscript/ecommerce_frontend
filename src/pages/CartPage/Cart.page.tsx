import React from 'react';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import './Cart.page.scss';
import { CartItem } from 'components/CartItem/CartItem';
import { ReactComponent as Back } from 'assets/icons/arrow-left.svg';
import {
  useAppDispatch,
  useAppSelector,
} from '../../app/providers/store/lib/redux-hooks';
import {
  clearCart,
  getCart,
  getTotalCount,
  getTotalPrice,
} from '../../app/providers/store/slices/cart.slice';

const Cart: React.FC = () => {
  // const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector(getCart);
  const totalPrice = useAppSelector(getTotalPrice);
  const totalCount = useAppSelector(getTotalCount);
  const navigate = useNavigate();

  const handleClearCart = () => {
    dispatch(clearCart());
    // setShowModal(true);
  };

  return (
    <div className="cart">
      <button className="cart__link" onClick={() => navigate(-1)}>
        <Back className="cart__back" />
        Back
      </button>

      <h2 className="cart__title">Cart</h2>

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

      {/*{showModal ? (*/}
      {/*  <CheckoutModal setShowModal={setShowModal} />*/}
      {/*) : (*/}
      {/*  <div className="cart__content">*/}
      {/*    <div className="cart__list">*/}
      {/*      {totalCount === 0 ? (*/}
      {/*        <p className="cart__text">Your cart is empty</p>*/}
      {/*      ) : (*/}
      {/*        <>*/}
      {/*          {cartItems.map((phone) => {*/}
      {/*            return <CartItem key={phone.phone.id} phone={phone} />;*/}
      {/*          })}*/}
      {/*        </>*/}
      {/*      )}*/}
      {/*    </div>*/}

      {/*    <div className="cart__checkout">*/}
      {/*      <h2 className="cart__sum">$&nbsp;{totalPrice}</h2>*/}
      {/*      <p className="cart__total-items">{`Total for ${totalCount} items`}</p>*/}
      {/*      <button*/}
      {/*        className={cn('cart__btn', {*/}
      {/*          'cart__btn--disabled': totalCount === 0,*/}
      {/*        })}*/}
      {/*        onClick={handleClearCart}*/}
      {/*        disabled={totalCount === 0}*/}
      {/*      >*/}
      {/*        Checkout*/}
      {/*      </button>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  );
};

export default Cart;
