import { FC } from 'react';
import './UserRoute.scss';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as HomeIcon } from 'assets/icons/home.svg';
import { ReactComponent as ChevronIcon } from 'assets/icons/arrow-right.svg';
import { getCatalog } from 'shared/utils/getRoutes';

interface Props {
  name?: string;
}

const UserRoute: FC<Props> = ({ name }) => {
  const locationPath = useLocation()
    .pathname.split('/')
    .filter((el) => el !== 'catalog' && el.length)[0];

  return (
    <div className="user-route">
      <Link to={'/'}>
        <HomeIcon className="user-route__icon" />
      </Link>
      {locationPath && (
        <>
          <ChevronIcon className="user-route__icon" />
          <Link to={'/' + getCatalog(locationPath)} className="uppercase">
            {locationPath}
          </Link>
        </>
      )}
      {name && (
        <>
          <ChevronIcon className="user-route__icon" />
          <span className="user-route__path-item uppercase">{name}</span>
        </>
      )}
    </div>
  );
};

export default UserRoute;
