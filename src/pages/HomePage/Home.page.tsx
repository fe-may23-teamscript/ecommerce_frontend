import React from 'react';
import './Home.page.scss';
import { PicturesSlider } from 'components/PicturesSlider';
import { ProductsSlider } from 'components/ProductsSlider';
import { ShopByCategory } from 'components/ShopByCategory';

const HomePage: React.FC = () => (
  <div className="home-page">
    <PicturesSlider />
    <ProductsSlider title="Brand new models" />
    <ShopByCategory />
    <ProductsSlider title="Hot prices" />
  </div>
);

export default HomePage;
