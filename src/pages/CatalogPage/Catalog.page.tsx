import { useGetPhonesQuery } from 'api/phones.api';
import { Catalog } from 'components/Catalog/Catalog';
import CatalogControllers from 'components/CatalogControllers/CatalogControllers';
import { Loader } from 'components/Loader';
import { Pagination } from 'components/Pagination';
import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const CatalogPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const locationPath = useLocation().pathname;

  const limitParam = searchParams.get('limit');
  const offsetParam = searchParams.get('offset');

  const { data, isLoading, isError, isSuccess, refetch } = useGetPhonesQuery({
    limit: limitParam || 12,
    offset: offsetParam || 0,
  });

  useEffect(() => {
    console.log(locationPath);
    refetch();
  }, [locationPath, searchParams]);

  return !isLoading && !isError && isSuccess ? (
    <>
      <CatalogControllers key={locationPath} />
      <Catalog visibleData={data.rows} />
      <Pagination
        total={data.count}
        perPage={12}
        currentPage={1}
        onPageChange={() => setSearchParams()}
      />
    </>
  ) : (
    <Loader />
  );
};

export default CatalogPage;
