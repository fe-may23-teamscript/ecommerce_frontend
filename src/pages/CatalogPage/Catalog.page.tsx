import { useGetPhonesQuery } from 'api/phones.api';
import { Catalog } from 'components/Catalog/Catalog';
import CatalogControllers from 'components/CatalogControllers/CatalogControllers';
import { Loader } from 'components/Loader';
import { Pagination } from 'components/Pagination';
import { IProductModel } from 'models/IProductModel';
import { sortOptions } from 'models/ISortTypes';
import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearchWith } from 'shared/utils/SearchHelper';

const CatalogPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const locationPath = useLocation().pathname;

  const sortType = searchParams.get('sortType');
  const perPage = searchParams.get('perPage') || 12;
  const currentPage = searchParams.get('page') || 1;

  const { data, isLoading, isError, isSuccess, refetch } = useGetPhonesQuery({
    limit: perPage,
    offset: (+currentPage - 1) * +perPage || 0,
  });

  const getPreparedData = ({
    data,
    sortType,
  }: {
    data: IProductModel[];
    sortType: string;
  }) => {
    const result = [...data];

    switch (sortType) {
      case sortOptions.high:
        result.sort(
          (a: IProductModel, b: IProductModel) =>
            b.priceDiscount - a.priceDiscount,
        );
        break;
      case sortOptions.low:
        result.sort(
          (a: IProductModel, b: IProductModel) =>
            a.priceDiscount - b.priceDiscount,
        );
        break;
      case sortOptions.old:
        result.sort((a: IProductModel, b: IProductModel) => a.year - b.year);
        break;
      default:
        result.sort((a: IProductModel, b: IProductModel) => b.year - a.year);
    }

    return result;
  };

  const getNewPage = (numberOfPage: number) => {
    setSearchParams(getSearchWith(searchParams, { page: `${numberOfPage}` }));
  };

  const handleSortChange = (sortType: string) =>
    setSearchParams(getSearchWith(searchParams, { sortType: sortType }));

  const handlePerPageChange = (perPage: string) =>
    setSearchParams(getSearchWith(searchParams, { perPage: perPage }));

  useEffect(() => {
    refetch();
  }, [locationPath, searchParams]);

  const preparedData = getPreparedData({
    data: data?.rows || [],
    sortType: sortType || '',
  });

  return !isLoading && !isError && isSuccess ? (
    <>
      <CatalogControllers
        key={locationPath}
        onSortChange={handleSortChange}
        onPerPageChange={handlePerPageChange}
      />
      <Catalog visibleData={preparedData} />
      <Pagination
        total={data.count}
        perPage={Number(perPage)}
        currentPage={+currentPage}
        onPageChange={(numberOfPage) => getNewPage(numberOfPage)}
      />
    </>
  ) : (
    <Loader />
  );
};

export default CatalogPage;
