import React from 'react';
import './CatalogControllers.scss';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Dropdown } from 'shared/ui/Dropdown';
import { SortOptions, SortOptionsValue } from 'models/ISortTypes';
import UserRoute from 'components/UserRoute/UserRoute';
import { useSearchWith } from '../../shared/hooks/useSearchWith';

const CatalogControllers: React.FC = () => {
  const locationPath = useLocation()
    .pathname.split('/')
    .filter((el) => el !== 'catalog' && el.length)[0];

  const dropDownSortOptions = [
    SortOptionsValue.NewestYear,
    SortOptionsValue.OldestYear,
    SortOptionsValue.LowestPrice,
    SortOptionsValue.HighestPrice,
  ];
  const dropDownLimitOptions = ['4', '8', '12', '16'];

  const [searchParams, setSearchParams] = useSearchParams();
  const limit = searchParams.get('limit') || '12';
  const order = searchParams.get('order') || SortOptionsValue.NewestYear;

  const getCorrectOrderProps = (value: string) => {
    switch (value) {
      case SortOptions.HighestPrice:
        return SortOptionsValue.HighestPrice;
        break;
      case SortOptions.LowestPrice:
        return SortOptionsValue.LowestPrice;
        break;
      case SortOptions.NewestYear:
        return SortOptionsValue.NewestYear;
        break;
      case SortOptions.OldestYear:
        return SortOptionsValue.OldestYear;
        break;
      default:
        null;
    }
  };

  const onSortSelectChange = (value: string) => {
    switch (value) {
      case SortOptionsValue.HighestPrice:
        setSearchParams(
          useSearchWith(searchParams, { order: SortOptions.HighestPrice }),
        );
        break;
      case SortOptionsValue.LowestPrice:
        setSearchParams(
          useSearchWith(searchParams, { order: SortOptions.LowestPrice }),
        );
        break;
      case SortOptionsValue.OldestYear:
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

  // useEffect(() => {
  //   switch (title) {
  //     case '/' + getCatalog('phones'):
  //       setTitle('Mobile phones');
  //       break;
  //     case '/' + getCatalog('tablets'):
  //       setTitle('Tablet devices');
  //       break;
  //     case '/' + getCatalog('accessories'):
  //       setTitle('Accessories');
  //       break;
  //     default:
  //       '';
  //   }
  // }, []);

  return (
    <section className="controllers">
      <UserRoute />
      <h1>{locationPath.charAt(0).toUpperCase() + locationPath.slice(1)}</h1>
      <div className="controllers__container">
        <div className="controllers__item">
          <div className="controllers__title">{'Sort by'}</div>
          <Dropdown
            onSelect={onSortSelectChange}
            options={dropDownSortOptions}
            selectedOption={getCorrectOrderProps(order)}
          />
        </div>
        <div className="controllers__item">
          <div className="controllers__title">{'Items on page'}</div>
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
