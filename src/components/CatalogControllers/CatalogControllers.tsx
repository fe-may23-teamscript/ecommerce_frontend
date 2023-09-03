import React, { useEffect, useState } from 'react';
import './CatalogControllers.scss';
import { getCatalog } from 'shared/utils/getRoutes';
import { useLocation } from 'react-router-dom';
import { Dropdown } from 'shared/ui/Dropdown';
import { sortOptions } from 'models/ISortTypes';
import { paginationCount } from 'models/IPaginationCount';

const CatalogControllers: React.FC = () => {
  const [title, setTitle] = useState(useLocation().pathname);
  const dropDowmSortOptions = Object.values(sortOptions);
  const dropDowmPaginationOptions = Object.values(paginationCount);

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
      <div>Route Path</div>
      <h1>{title}</h1>
      <div className="controllers__container">
        <div className="controllers__item">
          <div className="controllers__title">{'Sort by'}</div>
          <Dropdown options={dropDowmSortOptions} />
        </div>
        <div className="controllers__item">
          <div className="controllers__title">{'Sort by'}</div>
          <Dropdown options={dropDowmPaginationOptions} />
        </div>
      </div>
    </section>
  );
};

export default CatalogControllers;
