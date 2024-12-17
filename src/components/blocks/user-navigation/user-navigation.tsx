import {Link} from 'react-router-dom';
import {AppRoute} from '../../../const.tsx';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {logoutAction} from '../../../store/api-actions.ts';
import {getIsAuth} from '../../../store/user/user.selectors.ts';

export default function UserNavigation(): JSX.Element {
  const isAuth = useAppSelector(getIsAuth);
  const dispatch = useAppDispatch();

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link
            className="header__nav-link header__nav-link--profile"
            to={AppRoute.Favorites}
          >
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            {isAuth && (
              <>
                <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                <span className="header__favorite-count">3</span>
              </>
            )}
            {!isAuth && <span className="header__login">Sign in</span>}
          </Link>
        </li>
        {isAuth && (
          <li className="header__nav-item">
            <a className="header__nav-link" href="#" onClick={() => {
              dispatch(logoutAction());
            }}
            >
              <span className="header__signout">Sign out</span>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
