import React from 'react';
import cn from 'classnames';
import './Pagination.scss';
import { getNumbers } from 'shared/utils/GetNumbers';
import { getSearchWith } from 'shared/utils/SearchHelper';
import { useSearchParams, Link } from 'react-router-dom';

type Props = {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<Props> = ({
  total,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const [searchParams] = useSearchParams();
  const numbersOfPages = Math.ceil(total / perPage);
  const isCurrentPageFirst = currentPage === 1;
  const isCurrentPageLast = currentPage === numbersOfPages;

  const handlePageChange = (page: number) => {
    if (page !== currentPage && page > 0 && page <= numbersOfPages) {
      onPageChange(page);
    }
  };

  const pagesNumbersElements = getNumbers(1, numbersOfPages).map((page) => (
    <li
      className={cn('pagination__item', {
        'pagination__item--active': page === currentPage,
      })}
      key={page}
    >
      <Link
        to={{
          search: getSearchWith(searchParams, {
            page: page === 1 ? null : page.toString(),
          }),
        }}
        className={cn('pagination__link', {
          'pagination__link--active': page === currentPage,
        })}
        onClick={() => handlePageChange(page)}
      >
        {page}
      </Link>
    </li>
  ));

  return (
    <div className="pagination">
      <ul className="pagination__list">
        <li className="pagination__item">
          <Link
            to={{
              search: getSearchWith(searchParams, {
                page: currentPage === 2 ? null : (currentPage - 1).toString(),
              }),
            }}
            className={cn('pagination__link', {
              'pagination__link--disabled': isCurrentPageFirst,
            })}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            «
          </Link>
        </li>

        {pagesNumbersElements
          .filter(
            (item, ind) => ind >= currentPage - 4 && ind <= currentPage + 5,
          )
          .slice(0, 7)
          .map((item) => item)}

        <li className="pagination__item">
          <Link
            to={{
              search: getSearchWith(searchParams, {
                page: (currentPage + 1).toString(),
              }),
            }}
            className={cn('pagination__link', {
              'pagination__link--disabled': isCurrentPageLast,
            })}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            »
          </Link>
        </li>
      </ul>
    </div>
  );
};
