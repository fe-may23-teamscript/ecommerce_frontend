import { FC } from 'react';
import './UserRoute.scss';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as HomeIcon } from 'shared/assets/Home-Icon.svg';
import { ReactComponent as ChevronIcon } from 'shared/assets/Chevron-Arrow-Right.svg';
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
        <HomeIcon />
      </Link>
      {locationPath && (
        <>
          <ChevronIcon />
          <Link to={'/' + getCatalog(locationPath)} className="uppercase">
            {locationPath}
          </Link>
        </>
      )}
      {name && (
        <>
          <ChevronIcon />
          <span className="user-route__path-item uppercase">{name}</span>
        </>
      )}
    </div>
  );
};

export default UserRoute;
