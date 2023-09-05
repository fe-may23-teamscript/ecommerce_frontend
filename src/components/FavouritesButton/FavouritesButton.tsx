import React from 'react';
import './FavouritesButton.scss';
import {
  useAppDispatch,
  useAppSelector,
} from 'app/providers/store/lib/redux-hooks';
import {
  addToFavourites,
  deleteFromFavourites,
  getFavourites,
} from 'app/providers/store/slices/favourites.slice';
import { ReactComponent as Like } from 'assets/icons/fovorite.svg';
import { ReactComponent as Unlike } from 'assets/icons/unlike.svg';
import { IProductModel } from 'models/IProductModel';

type Props = {
  product: IProductModel;
};

export const FavouritesButton: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();
  const favouritesItems = useAppSelector(getFavourites);
  const isInFavourites = Boolean(
    favouritesItems.find((phone) => phone.id === product.id),
  );

  return (
    <button
      className="favorites-icon"
      onClick={() => {
        isInFavourites
          ? dispatch(deleteFromFavourites(product.id))
          : dispatch(addToFavourites(product));
      }}
    >
      {isInFavourites ? <Unlike /> : <Like />}
    </button>
  );
};
