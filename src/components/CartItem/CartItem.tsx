import React from 'react';
import './CartItem.scss';
import phoneImg from 'assets/images/product-card/product-1.png';
import { useAppDispatch } from 'app/providers/store/lib/redux-hooks';
import {
  decreaseCount,
  deleteFromCart,
  increaseCount,
} from 'app/providers/store/slices/cart.slice';
import { IPhoneWithCount } from 'app/providers/store/slices/cart.slice';
import { ReactComponent as Minus } from 'assets/icons/minus.svg';
import cn from 'classnames';

type CartItemProps = {
  phone: IPhoneWithCount;
};

export const CartItem: React.FC<CartItemProps> = ({ phone }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <button
          className="icon icon__cart-item icon__cart-item--close"
          onClick={() => dispatch(deleteFromCart(phone.phone.id))}
        />

        <div className="cart-item__description">
          <img className="cart-item__img" src={phoneImg} alt="phone" />
          <p className="cart-item__title">{phone.phone.name}</p>
        </div>
      </div>

      <div className="cart-item__price-block">
        <div className="cart-item__icons-block">
          <button
            disabled={phone.count === 1}
            className="icon icon__cart-item icon__cart-item--minus"
            onClick={() => dispatch(decreaseCount(phone.phone.id))}
          >
            <Minus
              className={cn('icon__cart-item--minus_icon', {
                ['icon__cart-item--minus_icon_disabled']: phone.count === 1,
              })}
            />
          </button>
          <div className="cart-item__counter">{phone.count}</div>
          <button
            className="icon
              icon__cart-item
              icon__cart-item--plus"
            onClick={() => dispatch(increaseCount(phone.phone.id))}
          />
        </div>

        <div className="cart-item__price">$ 999</div>
      </div>
    </div>
  );
};
