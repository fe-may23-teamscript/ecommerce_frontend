import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { IProductModel } from 'models/IProductModel';
import { getDevicePath } from 'shared/utils/getRoutes';
import './DeviceBlock.scss';
import { AddToCartButton } from 'components/AddToCartButton';
import { FavouritesButton } from 'components/FavouritesButton';
import { useTranslation } from 'react-i18next';

type Props = {
  product: IProductModel;
  pathname: string;
};

export const DeviceBlock: React.FC<Props> = ({ product, pathname }) => {
  const {
    slug,
    colorsAvailable,
    color,
    capacityAvailable,
    capacity,
    priceRegular,
    priceDiscount,
    screen,
    resolution,
    processor,
    ram,
  } = product;
  const category = pathname.split('/').splice(-2, 1).join('');
  const { t } = useTranslation();

  return (
    <div className="device-block">
      <span className="device-block__feature-name">{t('availableColors')}</span>
      <div className="device-block__buttons">
        {colorsAvailable.map((currentColor) => (
          <Link
            to={`/${getDevicePath(
              category,
              slug.replace(color, currentColor),
            )}`}
            className={cn(
              'device-block__color-button',
              `device-block__color-button--${currentColor}`,
              {
                'device-block__color-button--active': currentColor === color,
              },
            )}
            key={currentColor}
          ></Link>
        ))}
      </div>

      <span className="device-block__feature-name">{t('selectCapacity')}</span>
      <div className="device-block__buttons">
        {capacityAvailable.map((currentCapacity) => (
          <Link
            to={`/${getDevicePath(
              category,
              slug.replace(
                capacity.toLowerCase(),
                currentCapacity.toLocaleLowerCase(),
              ),
            )}`}
            className={cn('device-block__capacity-button', {
              'device-block__capacity-button--active':
                currentCapacity === capacity,
            })}
            key={currentCapacity}
          >
            {currentCapacity}
          </Link>
        ))}
      </div>

      <p className="device-block__price">
        <span className="device-block__price-current">${priceDiscount}</span>

        <span className="device-block__price-full">${priceRegular}</span>
      </p>

      <div className="device-block__buy">
        <AddToCartButton product={product} />
        <FavouritesButton product={product} />
      </div>

      <div className="device-block__features">
        <p className="device-block__feature">
          <span className="device-block__feature-name">{t('screen')}</span>

          <span className="device-block__feature-value">
            {/* eslint-disable */}
            {screen.split("'").join('” ')}
            {/* eslint-enable */}
          </span>
        </p>

        <p className="device-block__feature">
          <span className="device-block__feature-name">{t('resolution')}</span>
          <span className="device-block__feature-value">{resolution}</span>
        </p>

        <p className="device-block__feature">
          <span className="device-block__feature-name">{t('processor')}</span>
          <span className="device-block__feature-value">{processor}</span>
        </p>

        <p className="device-block__feature">
          <span className="device-block__feature-name">{t('ram')}</span>
          <span className="device-block__feature-value">{`${parseInt(
            ram,
          )} GB`}</span>
        </p>
      </div>
    </div>
  );
};
