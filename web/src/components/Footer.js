import imageCam from '../images/cam-image.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <p className="footer__text">2021: Una Odisea con JavaScript</p>

        <a href="https://www.adalab.es/" target="_blank" rel="noreferrer">
          <img
            className="footer__logo"
            src={imageCam}
            alt="Logo"
            title="Adalab"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
