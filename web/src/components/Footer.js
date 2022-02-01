
import imageCam from '../images/cam-image.png';

function Footer() {
    return (
        <footer className="footer">
        <p className="footer__text">2021: Una Odisea con JavaScript.</p>
        <a href="https://www.adalab.es/" target="_blank" rel="noreferrer">
          <img className="footer__logo" src={imageCam} alt="Adalab Logo" />
        </a>
      </footer>
    );
}

export default Footer;