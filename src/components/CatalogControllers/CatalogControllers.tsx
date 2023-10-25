import React from 'react';
import './CatalogControllers.scss';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Dropdown } from 'components/Dropdown';
import { SortOptions, SortOptionsValue } from 'models/ISortTypes';
import UserRoute from 'components/UserRoute/UserRoute';
import { useSearchWith } from '../../shared/hooks/useSearchWith';
import { useTranslation } from 'react-i18next';

const CatalogControllers: React.FC = () => {
  const { t } = useTranslation();

  const locationPath = useLocation()
    .pathname.split('/')
    .filter((el) => el !== 'catalog' && el.length)[0];

  const dropDownSortOptions = [
    t(SortOptionsValue.NewestYear),
    t(SortOptionsValue.OldestYear),
    t(SortOptionsValue.LowestPrice),
    t(SortOptionsValue.HighestPrice),
  ];
  const dropDownLimitOptions = ['4', '8', '12', '16'];

  const [searchParams, setSearchParams] = useSearchParams();
  const limit = searchParams.get('limit') || '12';
  const order = searchParams.get('order') || t(SortOptionsValue.NewestYear);

  const getCorrectOrderProps = (value: string) => {
    switch (value) {
      case SortOptions.HighestPrice:
        return t(SortOptionsValue.HighestPrice);
        break;
      case SortOptions.LowestPrice:
        return t(SortOptionsValue.LowestPrice);
        break;
      case SortOptions.NewestYear:
        return t(SortOptionsValue.NewestYear);
        break;
      case SortOptions.OldestYear:
        return t(SortOptionsValue.OldestYear);
        break;
      default:
        null;
    }
  };

  const onSortSelectChange = (value: string) => {
    switch (value) {
      case t(SortOptionsValue.HighestPrice):
        setSearchParams(
          useSearchWith(searchParams, { order: SortOptions.HighestPrice }),
        );
        break;
      case t(SortOptionsValue.LowestPrice):
        setSearchParams(
          useSearchWith(searchParams, { order: SortOptions.LowestPrice }),
        );
        break;
      case t(SortOptionsValue.OldestYear):
        setSearchParams(
          useSearchWith(searchParams, { order: SortOptions.OldestYear }),
        );
        break;
      default:
        setSearchParams(
          useSearchWith(searchParams, { order: SortOptions.NewestYear }),
        );
    }
  };

  const onPerPageSelectChange = (value: string) =>
    setSearchParams(useSearchWith(searchParams, { limit: String(value) }));

  return (
    <section className="controllers">
      <UserRoute />
      <h1>
        {t(locationPath).charAt(0).toUpperCase() + t(locationPath).slice(1)}
      </h1>
      <div className="controllers__container">
        <div className="controllers__item">
          <div className="controllers__title">{t('sortBy')}</div>
          <Dropdown
            onSelect={onSortSelectChange}
            options={dropDownSortOptions.map((option) => option)}
            selectedOption={getCorrectOrderProps(order)}
          />
        </div>
        <div className="controllers__item">
          <div className="controllers__title">{t('itemsOnPage')}</div>
          <Dropdown
            onSelect={onPerPageSelectChange}
            options={dropDownLimitOptions}
            selectedOption={limit}
          />
        </div>
      </div>
    </section>
  );
};

export default CatalogControllers;
