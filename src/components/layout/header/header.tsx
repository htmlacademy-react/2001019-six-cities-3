import Logo from '../../blocks/logo/logo.tsx';
import UserNavigation from '../../blocks/user-navigation/user-navigation.tsx';

export default function Header(): JSX.Element {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo logoType={'header'}/>
          </div>
          <UserNavigation/>
        </div>
      </div>
    </header>
  );
}
