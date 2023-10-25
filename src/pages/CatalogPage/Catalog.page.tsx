import { useGetProductsByCategoryQuery } from 'api/phones.api';
import { Catalog } from 'components/Catalog/Catalog';
import CatalogControllers from 'components/CatalogControllers/CatalogControllers';
import { Loader } from 'components/Loader';
import { Pagination } from 'components/Pagination';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { SortOptions } from '../../models/ISortTypes';
import { useSearchWith } from '../../shared/hooks/useSearchWith';
import { ToastContainer } from 'react-toastify';

const CatalogPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const locationPath = useLocation().pathname;

  const [last] = locationPath.split('/').reverse();

  const limit = searchParams.get('limit') || 12;
  const [currentPage, setCurrentPage] = useState(searchParams.get('page') || 1);
  const order = searchParams.get('order') || SortOptions.NewestYear;

  const { data, isLoading, isError, isSuccess } = useGetProductsByCategoryQuery(
    {
      category: last,
      limit: limit,
      offset: (+currentPage - 1) * +limit || 0,
      order: order,
    },
  );

  const getNewPage = (numberOfPage: number) =>
    setSearchParams(useSearchWith(searchParams, { page: `${numberOfPage}` }));

  useEffect(() => {
    setCurrentPage(1);
    setSearchParams(useSearchWith(searchParams, { page: '1' }));
  }, [limit, order]);

  return !isLoading && !isError && isSuccess ? (
    <>
      <CatalogControllers />
      <Catalog visibleData={data?.rows} />

      {data.rows.length > 0 && (
        <Pagination
          total={data.count}
          perPage={Number(limit)}
          currentPage={+currentPage}
          onPageChange={(numberOfPage) => {
            setCurrentPage(numberOfPage);
            getNewPage(numberOfPage);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}
      <ToastContainer position="bottom-right" />
    </>
  ) : (
    <Loader />
  );
};

export default CatalogPage;
