import React from 'react';
import './Favourites.page.scss';
import { ProductCard } from 'components/ProductCard';
import { useAppSelector } from 'app/providers/store/lib/redux-hooks';
import { getFavourites } from 'app/providers/store/slices/favourites.slice';
import UserRoute from 'components/UserRoute/UserRoute';
import { ToastContainer } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const FavouritesPage: React.FC = () => {
  const favouritesItems = useAppSelector(getFavourites);
  const total = favouritesItems.length;
  const { t } = useTranslation();

  return (
    <div className="favourites">
      <div className="favourites__grid">
        <div className="favourites__nav">
          <UserRoute />
        </div>

        <h2 className="favourites__title">{t('favourites')}</h2>
        <p className="favourites__count-items">
          {total} {total === 1 ? t('item') : t('items')}
        </p>

        {total === 0 ? (
          <h3 className="favourites__no-items">{t('noFavorites')}</h3>
        ) : (
          favouritesItems.map((product) => (
            <div className="favourites__product" key={product.id}>
              <ProductCard productCard={product} />
            </div>
          ))
        )}
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default FavouritesPage;
