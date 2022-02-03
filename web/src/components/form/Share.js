import ShareBtn from './ShareBtn';

const Share = (props) => {
  const renderShareUrl = () => {
    if (props.errorMessage === '' && props.shareUrl !== '') {
      return (
        <div className="createdCard js-createdCard collapsed">
          <h5 className="createdCard__title">La tarjeta ha sido creada:</h5>

          <a
            className="createdCard__link js_createdCard__link"
            href={props.shareUrl}
            target="_blank"
            rel="noreferrer"
            title="Enlace de la tarjeta"
          >
            {props.shareUrl}
          </a>

          <button className="createdCard__buttonTwitter">
            <i className="fab fa-twitter"></i>
            <a
              className="buttonLink js-buttonLink"
              href={`https://twitter.com/intent/tweet?text=%C2%A1Comparte%20esta%20tarjeta%20super%20molona%21&url=${props.shareUrl}`}
              target="_blank"
              rel="noreferrer"
              title="Compatir en Twitter"
            >
              Compartir en Twitter
            </a>
          </button>
        </div>
      );
    }
  };

  const renderError = () => {
    if (props.errorMessage !== '') {
      return <p className="catchError js_catchError">{props.errorMessage}</p>;
    }
  };

  return (
    <div
      className={`containerButton js-sectionShare js_content ${
        props.shareOpen ? '' : 'collapsed'
      }`}
      id="shareContent"
    >
      <ShareBtn
        errorMessage={props.errorMessage}
        handleClickBtn={props.handleClickBtn}
      />

      {renderError()}
      {renderShareUrl()}
    </div>
  );
};

export default Share;
