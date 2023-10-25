import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import './ProductDetails.page.scss';
import { ProductsSlider } from 'components/ProductsSlider';
import { ToastContainer } from 'react-toastify';
import { About } from 'components/About';
import { TechSpecs } from 'components/TechSpecs';
import { DeviceBlock } from 'components/DeviceBlock';
import { ModelImages } from 'components/ModelImages';
import { ReactComponent as Back } from 'assets/icons/arrow-left.svg';
import { Loader } from 'components/Loader';
import {
  useGetPhoneBySlugQuery,
  useGetHotPricePhonesQuery,
} from 'api/phones.api';
import { IProductModel } from 'models/IProductModel';
import UserRoute from 'components/UserRoute/UserRoute';
import { useTranslation } from 'react-i18next';

const ProductDetailsPage: React.FC = () => {
  const [product, setProduct] = useState<IProductModel | null>(null);
  const [hotPriceModels, setHotPriceModels] = useState<IProductModel[]>([]);
  const pathname = useLocation().pathname;
  const slug = useParams().slug || '';
  const productResponse = useGetPhoneBySlugQuery(slug);
  const hotPriceResponse = useGetHotPricePhonesQuery();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    productResponse.refetch();
    hotPriceResponse.refetch();

    if (productResponse.isSuccess) {
      setProduct(productResponse.data);
    }

    if (hotPriceResponse.isSuccess) {
      setHotPriceModels(hotPriceResponse.data);
    }
  }, [productResponse.currentData, hotPriceResponse.currentData]);

  if (!product) {
    return <Loader />;
  }

  return (
    <div className="product-details">
      <UserRoute name={product.name} />
      <button className="product-details__link" onClick={() => navigate(-1)}>
        <Back className="product-details__back" />
        {t('back')}
      </button>
      <h2 className="product-details__title">{product.name}</h2>
      <div className="product-details__info">
        <ModelImages images={product.images} alt={product.name} />
        <DeviceBlock product={product} pathname={pathname} />
        <span className="product-details__id">
          ID: {product.id.toString().padStart(4, '0')}
        </span>
      </div>
      <div className="product-details__info">
        <About productDescription={product.description} />
        <TechSpecs productInfo={product} />
      </div>
      <ProductsSlider title={t('youMayAlsoLike')} products={hotPriceModels} />
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default ProductDetailsPage;
