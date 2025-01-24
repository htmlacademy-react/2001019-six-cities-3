import {Link} from 'react-router-dom';
import {clsx} from 'clsx';
import {memo} from 'react';

type LogoProps = {
  logoType: 'footer' | 'header';
}

const classes = {
  header: {
    linkClass: 'header__logo-link',
    imgClass: 'header__logo',
  },
  footer: {
    linkClass: 'footer__logo-link',
    imgClass: 'footer__logo',
  },
};

const imgSize = {
  header: {
    width: 81,
    height: 41,
  },
  footer: {
    width: 64,
    height: 33,
  },
};

function Logo({logoType}: LogoProps): JSX.Element {
  const logoClasses = classes[logoType];
  const logoSize = imgSize[logoType];

  return (
    <Link className={clsx(logoClasses.linkClass)} to="/">
      <img className={clsx(logoClasses.imgClass)}
        src="img/logo.svg" alt="6 cities logo"
        width={logoSize.width}
        height={logoSize.height}
      />
    </Link>
  );
}

export default memo(Logo);
