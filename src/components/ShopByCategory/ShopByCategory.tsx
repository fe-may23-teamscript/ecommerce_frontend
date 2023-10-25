import { useEffect, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './ShopByCategory.scss';
import phonesImage from 'assets/images/shop-by-category/mobile_phones.jpg';
import tabletsImage from 'assets/images/shop-by-category/tablets.jpg';
import accessoriesImage from 'assets/images/shop-by-category/accessories.jpg';
import { getCatalog } from 'shared/utils/getRoutes';
import { useGetProductsByCategoryQuery } from 'api/phones.api';
import { useTranslation } from 'react-i18next';

export const ShopByCategory: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const phones = useGetProductsByCategoryQuery({ category: 'phones' });
  const tablets = useGetProductsByCategoryQuery({ category: 'tablets' });
  const accessories = useGetProductsByCategoryQuery({
    category: 'accessories',
  });

  useEffect(() => {
    phones.refetch();
    tablets.refetch();
    accessories.refetch();
  }, [phones.currentData, tablets.data, accessories.data]);

  const categories = [
    {
      title: t('mobilePhones'),
      image: phonesImage,
      models: phones.data?.count,
      path: 'phones',
    },
    {
      title: t('tablets'),
      image: tabletsImage,
      models: tablets.data?.count,
      path: 'tablets',
    },
    {
      title: t('accessories'),
      image: accessoriesImage,
      models: accessories.data?.count,
      path: 'accessories',
    },
  ];

  return (
    <div className="shop-by-category">
      <h2 className="shop-by-category__title">{t('shopByCategory')}</h2>
      <div className="shop-by-category__content">
        {categories.map((item) => (
          <div key={item.title} className="shop-by-category__category">
            <img
              src={item.image}
              alt={item.title}
              className="shop-by-category__img"
              onClick={() => navigate(getCatalog(item.path), { state: true })}
            />
            <h4 className="shop-by-category__name">{item.title}</h4>
            <p className="shop-by-category__models">{`${item.models} ${t(
              'models',
            )}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
