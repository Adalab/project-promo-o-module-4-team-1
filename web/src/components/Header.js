import logoAwesome from '../images/logo-awesome-profile-cards.svg';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className={props.className}>
      <div className={`${props.className}__wrapper`}>
        <Link to="/">
          <img
            className={props.classNameImage}
            src={logoAwesome}
            alt="Logo"
            title="Inicio"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
