import React from 'react';
import './Favourites.page.scss';
import { ProductCard } from 'components/ProductCard';
import { useAppSelector } from 'app/providers/store/lib/redux-hooks';
import { getFavourites } from 'app/providers/store/slices/favourites.slice';
import UserRoute from 'components/UserRoute/UserRoute';

const FavouritesPage: React.FC = () => {
  const favouritesItems = useAppSelector(getFavourites);
  const total = favouritesItems.length;

  return (
    <div className="favourites">
      <div className="favourites__grid">
        <div className="favourites__nav">
          <UserRoute />
        </div>

        <h2 className="favourites__title">Favourites</h2>
        <p className="favourites__count-items">{total} items</p>

        {total === 0 ? (
          <h3 className="favourites__no-items">
            There is no favourite product added yet
          </h3>
        ) : (
          favouritesItems.map((product) => (
            <div className="favourites__product" key={product.id}>
              <ProductCard productCard={product} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FavouritesPage;
