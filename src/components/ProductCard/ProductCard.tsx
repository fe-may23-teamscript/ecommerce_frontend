import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';
import { IProductModel } from 'models/IProductModel';
import { getDevicePath } from 'shared/utils/getRoutes';
import { BASE_URL } from 'shared/utils/constants';
import { AddToCartButton } from 'components/AddToCartButton';
import { FavouritesButton } from 'components/FavouritesButton';
import { useTranslation } from 'react-i18next';

type Props = {
  productCard: IProductModel;
};

export const ProductCard: React.FC<Props> = ({ productCard }) => {
  const {
    name,
    slug,
    category,
    priceRegular,
    priceDiscount,
    screen,
    capacity,
    ram,
    mainImage,
  } = productCard;
  const { t } = useTranslation();

  return (
    <div className="card">
      <Link to={`/${getDevicePath(category, slug)}`}>
        <div className="card__img-container">
          <img
            className="card__img"
            src={`${BASE_URL}${mainImage}`}
            alt={name}
            width="208px"
            height="196px"
          />
        </div>

        <h2 className="card__title">{name}</h2>

        <p className="card__price">
          <span className="card__price-current">${priceDiscount}</span>

          <span className="card__price-full">${priceRegular}</span>
        </p>

        <div className="card__features">
          <p className="card__feature">
            <span className="card__feature-name">{t('screen')}</span>

            <span className="card__feature-value">
              {/* eslint-disable */}
              {screen.split("'").join('” ')}
              {/* eslint-enable */}
            </span>
          </p>

          <p className="card__feature">
            <span className="card__feature-name">{t('capacity')}</span>

            <span className="card__feature-value">{`${parseInt(
              capacity,
            )} GB`}</span>
          </p>

          <p className="card__feature">
            <span className="card__feature-name">{t('ram')}</span>

            <span className="card__feature-value">{`${parseInt(ram)} GB`}</span>
          </p>
        </div>
      </Link>

      <div className="card__buy">
        <AddToCartButton product={productCard} />
        <FavouritesButton product={productCard} />
      </div>
    </div>
  );
};
