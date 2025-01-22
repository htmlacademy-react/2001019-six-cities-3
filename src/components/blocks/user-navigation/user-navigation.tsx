import {Link} from 'react-router-dom';
import {AppRoute} from '@/const.tsx';
import {useAppDispatch, useAppSelector} from '@/hooks';
import {getIsAuth, getLogin} from '@/store/user';
import {logoutAction} from '@/store/user/user.api-actions.ts';
import {fetchFavoritesAction, getFavoritesCount} from '@/store/offer-data';
import {useEffect} from 'react';
import {memo} from 'react';

function UserNavigation(): JSX.Element {
  const isAuth = useAppSelector(getIsAuth);
  const dispatch = useAppDispatch();
  const favoritesCount = useAppSelector(getFavoritesCount);
  const userName = useAppSelector(getLogin);

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchFavoritesAction());
    }
  }, [dispatch, isAuth]);

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
                <span className="header__user-name user__name">{userName}</span>
                <span className="header__favorite-count">{favoritesCount}</span>
              </>
            )}
            {!isAuth && <span className="header__login">Sign in</span>}
          </Link>
        </li>
        {isAuth && (
          <li className="header__nav-item">
            <a className="header__nav-link" href="#" onClick={(e) => {
              e.preventDefault();
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

export default memo(UserNavigation);
