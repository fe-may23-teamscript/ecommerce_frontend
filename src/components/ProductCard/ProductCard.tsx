import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';
import imgSrc from 'assets/images/product-card/product-1.png';
import { IProductModel } from 'models/IProductModel';
import { getDevicePath } from 'shared/utils/getRoutes';
import {
  useAppDispatch,
  useAppSelector,
} from 'app/providers/store/lib/redux-hooks';
import { addToCart, getCart } from 'app/providers/store/slices/cart.slice';
import {
  addToFavourites,
  deleteFromFavourites,
  getFavourites,
} from 'app/providers/store/slices/favourites.slice';
import { ReactComponent as Like } from 'assets/icons/fovorite.svg';
import { ReactComponent as Unlike } from 'assets/icons/unlike.svg';

type Props = {
  productCard: IProductModel;
};

export const ProductCard: React.FC<Props> = ({ productCard }) => {
  const {
    id,
    name,
    slug,
    category,
    priceRegular,
    priceDiscount,
    screen,
    capacity,
    ram,
  } = productCard;

  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector(getCart);
  const favouritesItems = useAppSelector(getFavourites);

  const isInCart = Boolean(cartItems.find(({ phone }) => phone.id === id));
  const isInFavourites = Boolean(
    favouritesItems.find((phone) => phone.id === id),
  );

  return (
    <div className="card">
      <div className="card__img-container">
        <Link to={`/${getDevicePath(category, slug)}`}>
          <img
            className="card__img"
            src={imgSrc}
            alt="iPhone"
            width="208px"
            height="196px"
          />
        </Link>
      </div>

      <h2 className="card__title">{name}</h2>

      <p className="card__price">
        <span className="card__price-current">${priceDiscount}</span>

        <span className="card__price-full">${priceRegular}</span>
      </p>

      <div className="card__features">
        <p className="card__feature">
          <span className="card__feature-name">Screen</span>

          <span className="card__feature-value">
            {/* eslint-disable */}
            {screen.split("'").join('” ')}
            {/* eslint-enable */}
          </span>
        </p>

        <p className="card__feature">
          <span className="card__feature-name">Capacity</span>

          <span className="card__feature-value">{`${parseInt(
            capacity,
          )} GB`}</span>
        </p>

        <p className="card__feature">
          <span className="card__feature-name">RAM</span>

          <span className="card__feature-value">{`${parseInt(ram)} GB`}</span>
        </p>
      </div>

      <div className="card__buy">
        <button
          disabled={isInCart}
          className="card__add-to-cart"
          onClick={() => dispatch(addToCart(productCard))}
        >
          {isInCart ? 'Added to cart' : 'Add to cart'}
        </button>

        <button
          className="card__favorites-icon"
          onClick={() => {
            isInFavourites
              ? dispatch(deleteFromFavourites(id))
              : dispatch(addToFavourites(productCard));
          }}
        >
          {isInFavourites ? <Unlike /> : <Like />}
        </button>
      </div>
    </div>
  );
};
