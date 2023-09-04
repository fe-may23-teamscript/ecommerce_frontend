import { FC } from 'react';
import './UserRoute.scss';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as HomeIcon } from 'shared/assets/Home-Icon.svg';
import { ReactComponent as ChevronIcon } from 'shared/assets/Chevron-Arrow-Right.svg';
import { getCatalog, getDevicePath } from 'shared/utils/getRoutes';

interface Props {
  slug?: string;
}

const UserRoute: FC<Props> = ({ slug }) => {
  const locationPath = useLocation()
    .pathname.split('/')
    .filter((el) => el !== 'catalog' && el.length)[0];

  return (
    <div className="user-route">
      <Link to={'/'}>
        <HomeIcon />
      </Link>
      {locationPath && (
        <>
          <ChevronIcon />
          <Link
            to={'/' + getCatalog(locationPath)}
            className="user-route__path-item"
          >
            {locationPath}
          </Link>
        </>
      )}
      {slug && (
        <>
          <ChevronIcon />
          <Link
            to={getDevicePath(locationPath, slug)}
            className="user-route__path-item"
          >
            {slug}
          </Link>
        </>
      )}
    </div>
  );
};

export default UserRoute;
