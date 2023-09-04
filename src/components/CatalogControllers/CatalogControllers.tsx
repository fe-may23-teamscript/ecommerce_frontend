import React, { useEffect, useState } from 'react';
import './CatalogControllers.scss';
import { getCatalog } from 'shared/utils/getRoutes';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Dropdown } from 'shared/ui/Dropdown';
import { SortOptions } from 'models/ISortTypes';
import UserRoute from 'components/UserRoute/UserRoute';
import { useSearchWith } from '../../shared/hooks/useSearchWith';

interface Props {
  onSortChange: (sortType: string) => void;
  onPerPageChange: (perPage: string) => void;
}

const CatalogControllers: React.FC<Props> = () => {
  const [title, setTitle] = useState(useLocation().pathname);
  const dropDownSortOptions = [
    SortOptions.NewestYear,
    SortOptions.OldestYear,
    SortOptions.LowestPrice,
    SortOptions.HighestPrice,
  ];
  const dropDownLimitOptions = [4, 8, 12, 16];

  const [searchParams, setSearchParams] = useSearchParams();
  const limit = searchParams.get('limit') || 12;
  const order = searchParams.get('order') || SortOptions.NewestYear;

  useEffect(() => {
    switch (title) {
      case '/' + getCatalog('phones'):
        setTitle('Mobile phones');
        break;
      case '/' + getCatalog('tablets'):
        setTitle('Tablet devices');
        break;
      case '/' + getCatalog('accessories'):
        setTitle('Accessories');
        break;
      default:
        '';
    }
  }, []);

  return (
    <section className="controllers">
      <UserRoute />
      <h1>{title}</h1>
      <div className="controllers__container">
        <div className="controllers__item">
          <div className="controllers__title">{'Sort by'}</div>
          <Dropdown
            onSelect={(value) =>
              setSearchParams(
                useSearchWith(searchParams, { order: String(value) }),
              )
            }
            options={dropDownSortOptions}
            selectedOption={order}
          />
        </div>
        <div className="controllers__item">
          <div className="controllers__title">{'Items on page'}</div>
          <Dropdown
            onSelect={(value) =>
              setSearchParams(
                useSearchWith(searchParams, { limit: String(value) }),
              )
            }
            options={dropDownLimitOptions}
            selectedOption={limit}
          />
        </div>
      </div>
    </section>
  );
};

export default CatalogControllers;
