import Logo from '../../blocks/logo/logo.tsx';
import UserNavigation from '../../blocks/user-navigation/user-navigation.tsx';

type HeaderProps = {
  shouldRenderUser: boolean;
}

export default function Header({shouldRenderUser}: HeaderProps): JSX.Element {
  shouldRenderUser = true;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo logoType={'header'}/>
          </div>
          {shouldRenderUser && <UserNavigation/>}
        </div>
      </div>
    </header>
  );
}
