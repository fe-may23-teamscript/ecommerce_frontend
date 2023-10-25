import { FC, useEffect, useRef, useState } from 'react';
import './SearchBar.scss';
import useDebounce from 'shared/utils/useDebounce';
import { FaSearch } from 'react-icons/fa';
import { useGetProductsBySearchQuery } from 'api/phones.api';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader';
import { BASE_URL } from 'shared/utils/constants';
import { useOutsideClick } from 'shared/hooks/useOutsideClick';
import { getDevicePath } from 'shared/utils/getRoutes';
import { IProductModel } from 'models/IProductModel';
import { useTranslation } from 'react-i18next';

const SearchBar: FC = () => {
  const [query, setQuery] = useState<string>('');
  const [isActive, setIsActive] = useState(true);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery');
  const { data, isLoading, isFetching, refetch } = useGetProductsBySearchQuery({
    query: searchQuery,
  });
  const { t } = useTranslation();

  const locationPath = useLocation().pathname;

  const resultsRef = useRef(null);

  useDebounce(query, 600);

  useOutsideClick(resultsRef, () => setIsActive(false));

  useEffect(() => {
    refetch();
  }, [searchQuery]);

  useEffect(() => {
    setQuery('');
  }, [locationPath]);

  return (
    <div className="search__wrapper">
      <div className="search__container">
        <div className="search__icon">
          <FaSearch id="search-icon" />
        </div>
        <input
          value={query}
          onFocus={() => setIsActive(true)}
          ref={resultsRef}
          type="search"
          name="product search"
          id="search"
          placeholder={t('search')}
          className="search__field"
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
      </div>
      {searchQuery && isActive && (
        <div className="search__results">
          {isLoading && isFetching ? (
            <Loader />
          ) : (
            <>
              {!data?.rows.length && (
                <h4 className="search__results-item">
                  {t('notFoundProducts')}
                </h4>
              )}
              {data?.rows.map((product: IProductModel) => (
                <Link
                  to={getDevicePath(product.category, product.slug)}
                  key={product.id}
                  className="search__results-item"
                >
                  <img
                    src={`${BASE_URL}${product.images[0]}`}
                    alt={product.name}
                    className="search__results-photo"
                  />
                  <span className="button">{product.name}</span>
                </Link>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
