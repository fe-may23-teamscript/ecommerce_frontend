/* eslint-disable @typescript-eslint/no-unused-vars */
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

  const getCorrectPages = (currentPage: number, allPages: JSX.Element[]) => {
    if (allPages.length < 7) {
      return allPages.slice(0, 7);
    }

    if (currentPage < 4) {
      return allPages.slice(0, 7);
    }

    if (currentPage > allPages.length - 4) {
      return allPages.slice(allPages.length - 7);
    }

    return allPages.slice(currentPage - 4, currentPage + 3);
  };

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

        {getCorrectPages(currentPage, pagesNumbersElements).map((item) => item)}

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
