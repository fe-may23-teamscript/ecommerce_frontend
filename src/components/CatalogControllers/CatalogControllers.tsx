import React, { useEffect, useState } from 'react';
import './CatalogControllers.scss';
import { getCatalog } from 'shared/utils/getRoutes';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Dropdown } from 'shared/ui/Dropdown';
import { sortOptions } from 'models/ISortTypes';
import { paginationCount } from 'models/IPaginationCount';
import UserRoute from 'components/UserRoute/UserRoute';

interface Props {
  onSortChange: (sortType: string) => void;
  onPerPageChange: (perPage: string) => void;
}

const CatalogControllers: React.FC<Props> = ({
  onSortChange,
  onPerPageChange,
}) => {
  const [title, setTitle] = useState(useLocation().pathname);
  const dropDowmSortOptions = Object.values(sortOptions);
  const dropDowmPaginationOptions = Object.values(paginationCount);

  const [searchParams] = useSearchParams();
  const perPage = searchParams.get('perPage') || '12';

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
            options={dropDowmSortOptions}
            onSelectChange={onSortChange}
            selectedOption={sortOptions.new}
          />
        </div>
        <div className="controllers__item">
          <div className="controllers__title">{'Items on page'}</div>
          <Dropdown
            options={dropDowmPaginationOptions}
            onSelectChange={onPerPageChange}
            selectedOption={perPage}
          />
        </div>
      </div>
    </section>
  );
};

export default CatalogControllers;
