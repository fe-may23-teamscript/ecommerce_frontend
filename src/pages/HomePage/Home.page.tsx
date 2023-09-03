import React from 'react';
import './Home.page.scss';
import { PicturesSlider } from 'components/PicturesSlider';
import { ProductsSlider } from 'components/ProductsSlider';
import { ShopByCategory } from 'components/ShopByCategory';
import {
  useGetBrandNewPhonesQuery,
  useGetHotPricePhonesQuery,
} from '../../api/phones.api';

const HomePage: React.FC = () => {
  const { data: hotPricePhones } = useGetHotPricePhonesQuery();
  const { data: brandNewPhones } = useGetBrandNewPhonesQuery();

  return (
    <div className="home-page">
      <div className="container">
        <PicturesSlider />
        <ProductsSlider title="Brand new models" phones={brandNewPhones} />
        <ShopByCategory />
        <ProductsSlider title="Hot prices" phones={hotPricePhones} />
      </div>
    </div>
  );
};

export default HomePage;
