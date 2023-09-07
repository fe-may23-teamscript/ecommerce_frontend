/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect } from 'react';
import './Home.page.scss';
import { PicturesSlider } from 'components/PicturesSlider';
import { ProductsSlider } from 'components/ProductsSlider';
import { ShopByCategory } from 'components/ShopByCategory';
import {
  useGetBrandNewPhonesQuery,
  useGetHotPricePhonesQuery,
} from 'api/phones.api';

const HomePage: FC = () => {
  const newModelResponse = useGetBrandNewPhonesQuery();
  const hotPriceResponse = useGetHotPricePhonesQuery();

  useEffect(() => {
    newModelResponse.refetch();
    hotPriceResponse.refetch();

    console.log(hotPriceResponse.data);
  }, [newModelResponse.data, hotPriceResponse.data]);

  return (
    <div className="home">
      <PicturesSlider />
      <ProductsSlider title="Brand new models" phones={newModelResponse.data} />
      <ShopByCategory />
      <ProductsSlider title="Hot prices" phones={hotPriceResponse.data} />
    </div>
  );
};

export default HomePage;
