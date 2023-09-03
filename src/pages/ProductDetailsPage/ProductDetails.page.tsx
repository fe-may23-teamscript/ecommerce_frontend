import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ProductDetails.page.scss';
import currentItem from 'api/apple-iphone-7-32gb-black.json';
import phones from 'api/phones.json';
import { getHomePath } from 'shared/utils/getRoutes';
import { ProductsSlider } from 'components/ProductsSlider';
import { About } from 'components/About';
import { TechSpecs } from 'components/TechSpecs';
import { DeviceBlock } from 'components/DeviceBlock';
import { PhoneImageSlider } from 'components/PhoneImageSlider';

const ProductDetailsPage: React.FC = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="product-details">
      <div className="container">
        <Link to={getHomePath()} className="product-details__link">
          Back
        </Link>
        <h2 className="product-details__title">{currentItem.name}</h2>
        <div className="product-details__info">
          <PhoneImageSlider />
          <DeviceBlock product={currentItem} pathname={pathname} />
          <span className="product-details__id">
            ID: {currentItem.id.toString().padStart(4, '0')}
          </span>
        </div>
        <div className="product-details__info">
          <About productDescription={currentItem.description} />
          <TechSpecs productInfo={currentItem} />
        </div>
        <ProductsSlider title="You may also like" phones={phones} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
