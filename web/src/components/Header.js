import logoAwesome from '../images/logo-awesome-profile-cards.svg';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className={props.className}>
      <Link to="/">
        {' '}
        {/*revisar ruta*/}
        <img
          className={props.classNameImage}
          src={logoAwesome}
          alt="Awesome profile cards logo"
        />
      </Link>
    </header>
  );
}

export default Header;
