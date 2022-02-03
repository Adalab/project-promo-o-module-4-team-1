import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <section className="landing">
      <h1 className="landing__title">Crea tu tarjeta de visita</h1>

      <p className="landing__text">
        Crea mejores contactos profesionales de forma fácil y cómoda
      </p>

      <nav className="landing__nav">
        <ul className="list">
          <li className="list__item">
            <i className="list__item--icon far fa-object-ungroup"></i>
            Diseña
          </li>

          <li className="list__item">
            <i className="list__item--icon far fa-keyboard"></i>
            Rellena
          </li>

          <li className="list__item">
            <i className="list__item--icon fas fa-share-alt"></i>
            Comparte
          </li>
        </ul>
      </nav>

      <div className="landing__btn">
        <Link
          to="/CardGenerate"
          className="landing__btn--link"
          title="Comenzar"
        >
          Comenzar
        </Link>
      </div>
    </section>
  );
};

export default Main;
