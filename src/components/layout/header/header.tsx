import {Link} from "react-router-dom";
import {AppRoute, AuthorizationStatus} from "../../../const.tsx";
import {getAuthorizationStatus} from "../../../authorizationStatus.ts";
import Logo from "../../blocks/logo/logo.tsx";

type HeaderProps = {
  shouldRenderUser: boolean,
}

export default function Header({shouldRenderUser}: HeaderProps): JSX.Element {

  const isAuth = getAuthorizationStatus() === AuthorizationStatus.Auth;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo logoType={'header'}/>
          </div>
          {
            shouldRenderUser && (
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
                      <a className="header__nav-link" href="#">
                        <span className="header__signout">Sign out</span>
                      </a>
                    </li>
                  )}
                </ul>
              </nav>
            )
          }
        </div>
      </div>
    </header>
  );
}
