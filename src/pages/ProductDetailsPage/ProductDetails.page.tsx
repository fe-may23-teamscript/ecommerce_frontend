import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetails.page.scss';
import currentItem from 'api/apple-iphone-7-32gb-black.json';
import phones from 'api/phones.json';
import { getHomePath } from 'shared/utils/getRoutes';
import { ProductsSlider } from 'components/ProductsSlider';
import { About } from 'components/About';
import { TechSpecs } from 'components/TechSpecs';

const ProductDetailsPage: React.FC = () => {
  return (
    <div className="product-details">
      <div className="container">
        <Link to={getHomePath()} className="product-details__link">
          Back
        </Link>
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
