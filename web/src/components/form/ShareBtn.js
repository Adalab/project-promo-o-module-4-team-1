const ShareBtn = (props) => {
  return (
    <button
      className={`buttonCard js-buttonCard buttonCard--${
        props.errorMessage() !== '' ? 'off' : 'on'
      }`}
      disabled={props.errorMessage() !== '' ? true : false}
      onClick={props.handleClickBtn}
    >
      <i className="far fa-address-card"></i>
      <p className="buttonCard__title">Crear tarjeta</p>
    </button>
  );
};

export default ShareBtn;
