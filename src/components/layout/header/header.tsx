import Logo from '../../blocks/logo/logo.tsx';
import UserNavigation from '../../blocks/user-navigation/user-navigation.tsx';
import {memo} from 'react';

type THeaderProps = {
  shouldRenderUser: boolean;
}
function Header({shouldRenderUser}: THeaderProps): JSX.Element {

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

export default memo(Header);
