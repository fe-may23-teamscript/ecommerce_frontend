import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ShopByCategory.scss';
import phones from 'assets/images/shop-by-category/mobile_phones.jpg';
import tablets from 'assets/images/shop-by-category/tablets.jpg';
import accessories from 'assets/images/shop-by-category/accessories.jpg';
import { getCatalog } from 'shared/utils/getRoutes';

export const ShopByCategory: React.FC = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: 'Mobile phones',
      image: phones,
      models: 95,
      path: 'phones',
    },
    {
      title: 'Tablets',
      image: tablets,
      models: 24,
      path: 'tablets',
    },
    {
      title: 'Accessories',
      image: accessories,
      models: 100,
      path: 'accessories',
    },
  ];

  return (
    <div className="shop-by-category">
      <h2 className="shop-by-category__title">Shop by category</h2>
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
            <p className="shop-by-category__models">{`${item.models} models`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
