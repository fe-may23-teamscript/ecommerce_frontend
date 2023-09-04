import React from 'react';
import './Favourites.page.scss';
import { getHomePath } from 'shared/utils/getRoutes';
import { Link } from 'react-router-dom';
import ArrowRight from 'shared/assets/ArrowRight-Icon.svg';
import { ProductCard } from 'components/ProductCard';
import { useAppSelector } from 'app/providers/store/lib/redux-hooks';
import { getFavourites } from 'app/providers/store/slices/favourites.slice';

const FavouritesPage: React.FC = () => {
  const favouritesItems = useAppSelector(getFavourites);
  const total = favouritesItems.length;

  return (
    <div className="favourites">
      <div className="container">
        <div className="favourites__grid">
          <div className="favourites__nav">
            <Link
              to={getHomePath()}
              className="favourites__item favourites__item-home"
            ></Link>
            <img
              src={ArrowRight}
              className="favourites__item favourites__item-arrow-rigth"
            />
            <div className="favourites__item favourites__item-page">
              Favourites
            </div>
          </div>

          <h2 className="favourites__title">Favourites</h2>
          <p className="favourites__count-items">{total} items</p>

          {total === 0 ? (
            <h3 className="favourites__no-items">
              There is no favourite product added yet
            </h3>
          ) : (
            favouritesItems.map((phone) => (
              <div className="favourites__product" key={phone.id}>
                <ProductCard productCard={phone} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FavouritesPage;
