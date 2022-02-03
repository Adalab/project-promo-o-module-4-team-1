const ShareBtn = (props) => {
  return (
    <>
      <button
        className={`buttonCard js-buttonCard buttonCard--${
          props.isDisabled() ? "off" : "on"
        }`}
        disabled={props.isDisabled()}
        onClick={props.handleClickBtn}
      >
        <i className="far fa-address-card"></i>
        <p className="buttonCard__title">Crear tarjeta</p>
      </button>
      <p>{props.errorMessage}</p>
    </>
  );
};
export default ShareBtn;
