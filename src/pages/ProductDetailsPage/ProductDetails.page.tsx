import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import './ProductDetails.page.scss';
import { getHomePath } from 'shared/utils/getRoutes';
//import { ProductsSlider } from 'components/ProductsSlider';
import { About } from 'components/About';
import { TechSpecs } from 'components/TechSpecs';
import { DeviceBlock } from 'components/DeviceBlock';
import { PhoneImageSlider } from 'components/PhoneImageSlider';
import { useGetPhoneBySlugQuery } from 'api/phones.api';
import { IProductModel } from 'models/IProductModel';

const ProductDetailsPage: React.FC = () => {
  const [product, setProduct] = useState<IProductModel | null>(null);
  const { pathname } = useLocation();
  const slug = useParams().slug || '';
  const productResponse = useGetPhoneBySlugQuery(slug);

  useEffect(() => {
    productResponse.refetch();

    if (productResponse.isSuccess) {
      setProduct(productResponse.data);
    }
  }, [productResponse.currentData]);

  return (
    <>
      {product && (
        <div className="product-details">
          <div className="container">
            <Link to={getHomePath()} className="product-details__link">
              Back
            </Link>
            <h2 className="product-details__title">{product.name}</h2>
            <div className="product-details__info">
              <PhoneImageSlider />
              <DeviceBlock product={product} pathname={pathname} />
              <span className="product-details__id">
                ID: {product.id.toString().padStart(4, '0')}
              </span>
            </div>
            <div className="product-details__info">
              <About productDescription={product.description} />
              <TechSpecs productInfo={product} />
            </div>
            {/* <ProductsSlider title="You may also like" products={phones} />*/}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailsPage;
