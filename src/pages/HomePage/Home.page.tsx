/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect, useState } from 'react';
import './Home.page.scss';
import { PicturesSlider } from 'components/PicturesSlider';
import { ProductsSlider } from 'components/ProductsSlider';
import { ShopByCategory } from 'components/ShopByCategory';
import {
  useGetBrandNewPhonesQuery,
  useGetHotPricePhonesQuery,
} from 'api/phones.api';
import { IProductModel } from 'models/IProductModel';

const HomePage: FC = () => {
  const [newPhoneModels, setNewPhoneModels] = useState<IProductModel[]>([]);
  const [hotPriceModels, setHotPriceModels] = useState<IProductModel[]>([]);

  const newModelResponse = useGetBrandNewPhonesQuery();
  const hotPriceResponse = useGetHotPricePhonesQuery();

  useEffect(() => {
    newModelResponse.refetch();
    hotPriceResponse.refetch();

    if (newModelResponse.isSuccess) {
      setNewPhoneModels(newModelResponse.data);
    }

    if (hotPriceResponse.isSuccess) {
      setHotPriceModels(hotPriceResponse.data);
    }
  }, [newModelResponse.data, hotPriceResponse.data]);

  return (
    <div className="home-page">
      <PicturesSlider />
      <ProductsSlider title="Brand new models" products={newPhoneModels} />
      <ShopByCategory />
      <ProductsSlider title="Hot prices" products={hotPriceModels} />
    </div>
  );
};

export default HomePage;
