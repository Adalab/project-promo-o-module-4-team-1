const ShareBtn = (props) => {
  return (
    <button
      className={`buttonCard buttonCard--${
        props.errorMessage() !== '' ? 'off' : 'on'
      }`}
      disabled={props.errorMessage() !== '' ? true : false}
      onClick={props.handleClickBtn}
      title="Crear tarjeta"
    >
      <i className="far fa-address-card"></i>
      <p className="buttonCard__title">Crear tarjeta</p>
    </button>
  );
};

export default ShareBtn;
