import React from 'react';
import './Home.page.scss';
import { PicturesSlider } from 'components/PicturesSlider';
import { ProductsSlider } from 'components/ProductsSlider';
import { ShopByCategory } from 'components/ShopByCategory';

const HomePage: React.FC = () => (
  <div className="home-page">
    <div className="container">
      <PicturesSlider />
      <ProductsSlider title="Brand new models" />
      <ShopByCategory />
      <ProductsSlider title="Hot prices" />
    </div>
  </div>
);

export default HomePage;
