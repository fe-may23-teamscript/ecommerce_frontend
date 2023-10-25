import React from 'react';
import './AddToCartButton.scss';
import { addToCart, getCart } from 'app/providers/store/slices/cart.slice';
import { toast } from 'react-toastify';
import {
  useAppDispatch,
  useAppSelector,
} from 'app/providers/store/lib/redux-hooks';
import { IProductModel } from 'models/IProductModel';
import { useTranslation } from 'react-i18next';

type Props = {
  product: IProductModel;
};

export const AddToCartButton: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector(getCart);
  const isInCart = Boolean(
    cartItems.find(({ phone }) => phone.id === product.id),
  );
  const { t } = useTranslation();

  return (
    <button
      disabled={isInCart}
      className="add-to-cart-btn"
      onClick={() => {
        toast.success(t('toastAddedToCart'));
        dispatch(addToCart(product));
      }}
    >
      {isInCart ? t('addedToCart') : t('addToCart')}
    </button>
  );
};
