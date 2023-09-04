/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect } from 'react';
import './Home.page.scss';
import { PicturesSlider } from 'components/PicturesSlider';
import { ProductsSlider } from 'components/ProductsSlider';
import { ShopByCategory } from 'components/ShopByCategory';
import { useGetBrandNewPhonesQuery, useGetHotPricePhonesQuery, } from 'api/phones.api';

const HomePage: FC = () => {
  const newModelResponse = useGetBrandNewPhonesQuery();
  const hotPriceResponse = useGetHotPricePhonesQuery();

  useEffect(() => {
    newModelResponse.refetch();
    hotPriceResponse.refetch();
  }, [newModelResponse.currentData, hotPriceResponse.currentData]);

  return (
    <div className="home-page">
      <div className="container">
        <PicturesSlider />
        <ProductsSlider
          title="Brand new models"
          phones={newModelResponse.data}
        />
        <ShopByCategory />
        <ProductsSlider title="Hot prices" phones={hotPriceResponse.data} />
      </div>
    </div>
  );
};

export default HomePage;
