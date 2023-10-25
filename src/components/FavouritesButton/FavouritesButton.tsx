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
import { ReactComponent as Like } from 'assets/icons/favourite.svg';
import { ReactComponent as Unlike } from 'assets/icons/unlike.svg';
import { IProductModel } from 'models/IProductModel';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

type Props = {
  product: IProductModel;
};

export const FavouritesButton: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();
  const favouritesItems = useAppSelector(getFavourites);
  const { t } = useTranslation();
  const isInFavourites = Boolean(
    favouritesItems.find((phone) => phone.id === product.id),
  );

  const handleClick = () => {
    if (isInFavourites) {
      dispatch(deleteFromFavourites(product.id));
      toast.success(t('toastRemovedFromFavourites'));
    } else {
      dispatch(addToFavourites(product));
      toast.success(t('toastAddedToFavourites'));
    }
  };

  return (
    <button className="favourites-btn" onClick={handleClick}>
      {isInFavourites ? (
        <Unlike className="favourites-btn__icon" />
      ) : (
        <Like className="favourites-btn__icon" />
      )}
    </button>
  );
};
