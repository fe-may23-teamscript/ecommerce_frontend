import { useGetPhonesQuery } from 'api/phones.api';
import { Catalog } from 'components/Catalog/Catalog';
import CatalogControllers from 'components/CatalogControllers/CatalogControllers';
import { Loader } from 'components/Loader';
import { Pagination } from 'components/Pagination';
// import { IProductModel } from 'models/IProductModel';
// import { SortOptions } from 'models/ISortTypes';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearchWith } from 'shared/utils/SearchHelper';
import { SortOptions } from '../../models/ISortTypes';
import { useSearchWith } from '../../shared/hooks/useSearchWith';
// import { useSearchWith } from '../../shared/hooks/useSearchWith';

const CatalogPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const locationPath = useLocation().pathname;

  // const sortType = searchParams.get('sortType');
  const limit = searchParams.get('limit') || 12;
  const [currentPage, setCurrentPage] = useState(searchParams.get('page') || 1);
  const order = searchParams.get('order') || SortOptions.NewestYear;

  const { data, isLoading, isError, isSuccess } = useGetPhonesQuery({
    limit: limit,
    offset: (+currentPage - 1) * +limit || 0,
    order: order,
  });

  const getNewPage = (numberOfPage: number) => {
    setSearchParams(getSearchWith(searchParams, { page: `${numberOfPage}` }));
  };

  const handleSortChange = (sortType: string) =>
    setSearchParams(getSearchWith(searchParams, { sortType: sortType }));

  const handlePerPageChange = (perPage: string) =>
    setSearchParams(getSearchWith(searchParams, { perPage: perPage }));

  // useEffect(() => {
  //   refetch();
  // }, [locationPath, searchParams]);

  useEffect(() => {
    setCurrentPage(1);
    setSearchParams(useSearchWith(searchParams, { page: '1'}));
  }, [limit, order]);

  return !isLoading && !isError && isSuccess ? (
    <>
      <CatalogControllers
        key={locationPath}
        onSortChange={handleSortChange}
        onPerPageChange={handlePerPageChange}
      />
      <Catalog visibleData={data?.rows} />
      <Pagination
        total={data.count}
        perPage={Number(limit)}
        currentPage={+currentPage}
        onPageChange={(numberOfPage) => {
          setCurrentPage(numberOfPage);
          getNewPage(numberOfPage);
        }}
      />
    </>
  ) : (
    <Loader />
  );
};

export default CatalogPage;
