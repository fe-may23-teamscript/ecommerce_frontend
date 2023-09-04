import React from 'react';
import './Favourites.page.scss';
import { getHomePath } from 'shared/utils/getRoutes';
import { Link } from 'react-router-dom';
import ArrowRight from 'shared/assets/ArrowRight-Icon.svg';
import { getNumbers } from 'shared/utils/GetNumbers';
import { ProductCard } from 'components/ProductCard';
import { IProductModel } from 'models/IProductModel';

const phone: IProductModel = {
  id: 2,
  slug: 'apple-iphone-11-128gb-green',
  category: 'phones',
  namespaceId: 'apple-iphone-11',
  name: 'Apple iPhone 11 128GB Green',
  capacityAvailable: ['64GB', '128GB', '256GB'],
  capacity: '128GB',
  priceRegular: 1100,
  priceDiscount: 1050,
  colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
  color: 'green',
  images: [
    'img/phones/apple-iphone-11/green/00.jpg',
    'img/phones/apple-iphone-11/green/01.jpg',
    'img/phones/apple-iphone-11/green/02.jpg',
    'img/phones/apple-iphone-11/green/03.jpg',
    'img/phones/apple-iphone-11/green/04.jpg',
  ],
  description: [
    {
      text: [
        'A transformative triple-camera system that adds tons of capability without complexity.',
        'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
      ],
      title: 'And then there was Pro',
    },
    {
      text: [
        'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
      ],
      title: 'Camera',
    },
    {
      text: [
        'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
      ],
      title:
        'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
    },
  ],
  screen: "6.1' IPS",
  resolution: '1792x828',
  processor: 'Apple A13 Bionic',
  ram: '4GB',
  camera: '12 Mp + 12 Mp + 12MP',
  zoom: 'Digital, 5x',
  cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
};

const FavouritesPage: React.FC = () => {
  const total = 5;
  const phoneItems = getNumbers(1, total).map((n) => (
    <ProductCard key={n} productCard={phone} />
  ));

  return (
    <div className="favourites">
      <div className="container">
        <div className="favourites__grid">
          <div className="favourites__nav">
            <Link
              to={getHomePath()}
              className="favourites__item favourites__item-home"
            ></Link>
            <img
              src={ArrowRight}
              className="favourites__item favourites__item-arrow-rigth"
            />
            <div className="favourites__item favourites__item-page">
              Favourites
            </div>
          </div>

          <h2 className="favourites__title">Favourites</h2>
          <p className="favourites__count-items">{total} items</p>

          {phoneItems.map((phone, i) => (
            <div className="favourites__product" key={i}>
              {phone}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavouritesPage;
