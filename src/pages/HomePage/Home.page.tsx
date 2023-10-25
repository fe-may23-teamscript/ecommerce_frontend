/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Home.page.scss';
import { PicturesSlider } from 'components/PicturesSlider';
import { ProductsSlider } from 'components/ProductsSlider';
import { ShopByCategory } from 'components/ShopByCategory';
import {
  useGetBrandNewPhonesQuery,
  useGetHotPricePhonesQuery,
} from 'api/phones.api';
import { useTranslation } from 'react-i18next';

const HomePage: FC = () => {
  const newModelResponse = useGetBrandNewPhonesQuery();
  const hotPriceResponse = useGetHotPricePhonesQuery();
  const { t } = useTranslation();

  useEffect(() => {
    newModelResponse.refetch();
    hotPriceResponse.refetch();
  }, [newModelResponse.data, hotPriceResponse.data]);

  return (
    <div className="home">
      <PicturesSlider />
      <ProductsSlider title={t('newModels')} products={newModelResponse.data} />
      <ShopByCategory />
      <ProductsSlider title={t('hotPrices')} products={hotPriceResponse.data} />
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default HomePage;
