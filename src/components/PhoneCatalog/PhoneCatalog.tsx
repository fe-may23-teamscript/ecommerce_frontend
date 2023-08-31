import React, { useState } from 'react';
import './PhoneCatalog';
import { getNumbers } from 'shared/utils/GetNumbers';
import { Pagination } from 'components/Pagination';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from 'shared/utils/SearchHelper';
import { ProductCard } from 'components/ProductCard/ProductCard';

const total = 95;

const items = getNumbers(1, total).map((n) => <ProductCard key={n} />);

export const PhoneCatalog: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromSearchParams = searchParams.get('page') || '1';
  const perPageFromSearchParams = searchParams.get('perPage') || '16';

  const [currentPage, setCurrentPage] = useState<number>(+pageFromSearchParams);
  const [perPage, setPerPage] = useState<number>(+perPageFromSearchParams);

  const startItem = perPage * currentPage - perPage + 1;
  const endItem =
    perPage * currentPage > items.length ? items.length : perPage * currentPage;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    setPerPage(+value);
    setSearchParams(
      getSearchWith(searchParams, {
        perPage: +value === total ? null : value,
      }),
    );
    setCurrentPage(+pageFromSearchParams || 1);
  };

  return (
    <div className="container page">
      <h1>Mobile phones</h1>

      <p>{`${total} models`}</p>

      <div className="page__selector">
        <label htmlFor="perPageSelector">items per page</label>

        <select
          id="perPageSelector"
          defaultValue={perPage}
          onChange={handleChange}
        >
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="16">16</option>
          <option value={total}>All</option>
        </select>
      </div>
      <div className="page__grid">
        {items.map((item, index) => {
          if (index >= startItem - 1 && index < endItem) {
            return (
              <div key={index} className="page__card">
                {item}
              </div>
            );
          }

          return '';
        })}
      </div>
      {total > perPage && (
        <Pagination
          total={total}
          perPage={perPage}
          currentPage={currentPage}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      )}
    </div>
  );
};
