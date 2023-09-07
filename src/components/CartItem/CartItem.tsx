import React from 'react';
import cn from 'classnames';
import './CartItem.scss';
import { useAppDispatch } from 'app/providers/store/lib/redux-hooks';
import {
  decreaseCount,
  deleteFromCart,
  increaseCount,
} from 'app/providers/store/slices/cart.slice';
import { IPhoneWithCount } from 'app/providers/store/slices/cart.slice';
import { ReactComponent as Delete } from 'assets/icons/close.svg';
import { ReactComponent as Minus } from 'assets/icons/minus.svg';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import { BASE_URL } from 'shared/utils/constants';

type CartItemProps = {
  phone: IPhoneWithCount;
};

export const CartItem: React.FC<CartItemProps> = ({ phone }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <button
          className="cart-item__btn"
          onClick={() => dispatch(deleteFromCart(phone.phone.id))}
        >
          <Delete className="cart-item__icon" />
        </button>

        <div className="cart-item__description">
          <img
            className="cart-item__img"
            src={`${BASE_URL}${phone.phone.mainImage}`}
            alt={phone.phone.name}
          />
          <p className="cart-item__title">{phone.phone.name}</p>
        </div>
      </div>

      <div className="cart-item__price-block">
        <div className="cart-item__icons-block">
          <button
            disabled={phone.count === 1}
            className="cart-item__btn"
            onClick={() => dispatch(decreaseCount(phone.phone.id))}
          >
            <Minus
              className={cn('cart-item__icon', {
                ['cart-item__icon--disabled']: phone.count === 1,
              })}
            />
          </button>
          <div className="cart-item__counter">{phone.count}</div>
          <button
            className="cart-item__btn"
            onClick={() => dispatch(increaseCount(phone.phone.id))}
          >
            <Plus className="cart-item__icon" />
          </button>
        </div>

        <div className="cart-item__price">{`$ ${phone.phone.priceDiscount}`}</div>
      </div>
    </div>
  );
};
