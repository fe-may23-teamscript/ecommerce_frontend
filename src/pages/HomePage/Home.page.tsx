import React from 'react';
import './Home.page.scss';
import { PicturesSlider } from 'components/PicturesSlider';
import { ProductsSlider } from 'components/ProductsSlider';
import { ShopByCategory } from 'components/ShopByCategory';
import phones from 'api/phones.json';

const HomePage: React.FC = () => (
  <div className="home-page">
    <div className="container">
      <PicturesSlider />
      <ProductsSlider title="Brand new models" phones={phones} />
      <ShopByCategory />
      <ProductsSlider title="Hot prices" phones={phones} />
    </div>
  </div>
);

export default HomePage;
