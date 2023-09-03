import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { IProductModel } from 'models/IProductModel';
import { getDevicePath } from 'shared/utils/getRoutes';
import './DeviceBlock.scss';

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

  return (
    <div className="device-block">
      <span className="device-block__feature-name">Available colors</span>
      <div className="device-block__buttons">
        {colorsAvailable.map((currentColor) => (
          <Link
            to={`/${getDevicePath(
              category,
              slug.replace(color, currentColor),
            )}`}
            className={classNames(
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

      <span className="device-block__feature-name">Select capacity</span>
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
            className={classNames('device-block__capacity-button', {
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
        <button className="device-block__add-to-cart">Add to cart</button>
        <button className="device-block__favorites-icon"></button>
      </div>

      <div className="device-block__features">
        <p className="device-block__feature">
          <span className="device-block__feature-name">Screen</span>

          <span className="device-block__feature-value">
            {/* eslint-disable */}
            {screen.split("'").join('” ')}
            {/* eslint-enable */}
          </span>
        </p>

        <p className="device-block__feature">
          <span className="device-block__feature-name">Resolution</span>
          <span className="device-block__feature-value">{resolution}</span>
        </p>

        <p className="device-block__feature">
          <span className="device-block__feature-name">Processor</span>
          <span className="device-block__feature-value">{processor}</span>
        </p>

        <p className="device-block__feature">
          <span className="device-block__feature-name">RAM</span>
          <span className="device-block__feature-value">{`${parseInt(
            ram,
          )} GB`}</span>
        </p>
      </div>
    </div>
  );
};
