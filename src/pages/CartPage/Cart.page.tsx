import React, { useState } from 'react';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './Cart.page.scss';
import { CartItem } from 'components/CartItem/CartItem';
import { CheckoutModal } from 'components/CheckoutModal';
import { ReactComponent as Back } from 'assets/icons/arrow-left.svg';
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
import { useTranslation } from 'react-i18next';

const Cart: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector(getCart);
  const totalPrice = useAppSelector(getTotalPrice);
  const totalCount = useAppSelector(getTotalCount);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClearCart = () => {
    dispatch(clearCart());
    setShowModal(true);
    document.body.classList.add('modal-open');

    setTimeout(() => {
      setShowModal(false);
      document.body.classList.remove('modal-open');
    }, 3000);
  };

  return (
    <div className={cn('cart', { 'modal-open': showModal })}>
      <button className="cart__link" onClick={() => navigate(-1)}>
        <Back className="cart__back" />
        {t('back')}
      </button>

      <h2 className="cart__title">{t('cart')}</h2>

      {showModal ? (
        <div className="cart__modal">
          <CheckoutModal setShowModal={setShowModal} />
        </div>
      ) : (
        <div className="cart__content">
          <div className="cart__list">
            {totalCount === 0 ? (
              <p className="cart__text">{t('emptyCart')}</p>
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
            <p className="cart__total-items">{`${t(
              'totalFor',
            )} ${totalCount} ${t('items')}`}</p>
            <button
              className={cn('cart__btn', {
                'cart__btn--disabled': totalCount === 0,
              })}
              onClick={handleClearCart}
              disabled={totalCount === 0}
            >
              {t('checkout')}
            </button>
          </div>
        </div>
      )}
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Cart;
