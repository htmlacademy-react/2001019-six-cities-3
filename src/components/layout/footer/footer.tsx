import Logo from '../../blocks/logo/logo.tsx';

export default function Footer(): JSX.Element {

  return (
    <footer className="footer container">
      <Logo logoType={'footer'}/>
    </footer>
  );
}
