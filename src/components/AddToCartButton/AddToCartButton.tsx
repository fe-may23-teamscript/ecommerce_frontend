import React from 'react';
import './AddToCartButton.scss';
import { addToCart, getCart } from 'app/providers/store/slices/cart.slice';
import {
  useAppDispatch,
  useAppSelector,
} from 'app/providers/store/lib/redux-hooks';
import { IProductModel } from 'models/IProductModel';

type Props = {
  product: IProductModel;
};

export const AddToCartButton: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector(getCart);
  const isInCart = Boolean(
    cartItems.find(({ phone }) => phone.id === product.id),
  );

  return (
    <button
      disabled={isInCart}
      className="add-to-cart-btn"
      onClick={() => dispatch(addToCart(product))}
    >
      {isInCart ? 'Added to cart' : 'Add to cart'}
    </button>
  );
};
