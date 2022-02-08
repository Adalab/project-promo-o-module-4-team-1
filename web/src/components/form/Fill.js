import GetAvatar from '../avatar/GetAvatar';

const Fill = (props) => {
  const renderErrorMessage = () => {
    if (props.errorMessage() !== '') {
      return <p className="catchError">{props.errorMessage()}</p>;
    }
  };

  return (
    <div className={`${props.fillOpen ? '' : 'collapsed'}`}>
      <form className="form">
        <label className="form__label" htmlFor="name">
          Nombre completo <span className="catchError">*</span>
        </label>

        <input
          className="form__input"
          type="text"
          name="name"
          id="name"
          placeholder="Ej: Sally Jill"
          value={props.data.name}
          onChange={props.handleInput}
        />

        <label className="form__label" htmlFor="job">
          Puesto <span className="catchError">*</span>
        </label>

        <input
          className="form__input"
          type="text"
          name="job"
          id="job"
          placeholder="Ej: Front-end unicorn"
          value={props.data.job}
          onChange={props.handleInput}
        />

        <label className="form__label" htmlFor="image">
          Imagen de perfil <span className="catchError">*</span>
        </label>

        <div className="form__image-section">
          <label className="form__image-section--add" htmlFor="file">
            Añadir imagen
          </label>

          <GetAvatar
            avatar={props.data.photo}
            handleInputPhoto={props.handleInputPhoto}
          />
        </div>

        <label className="form__label" htmlFor="email">
          Email <span className="catchError">*</span>
        </label>

        <input
          className="form__input"
          type="email"
          name="email"
          id="email"
          placeholder="Ej: sally-hill@gmail.com"
          value={props.data.email}
          onChange={props.handleInput}
        />

        <label className="form__label" htmlFor="phone">
          Teléfono
        </label>

        <input
          className="form__input"
          type="tel"
          pattern=""
          name="phone"
          id="phone"
          placeholder="Ej: 555-55-55-55"
          value={props.data.phone}
          onChange={props.handleInput}
        />

        <label className="form__label" htmlFor="linkedin">
          Linkedin <span className="catchError">*</span>
        </label>

        <input
          className="form__input"
          type="text"
          name="linkedin"
          id="linkedin"
          placeholder="Ej: linkedin.com/in/sally.hill"
          value={props.data.linkedin}
          onChange={props.handleInput}
        />

        <label className="form__label" htmlFor="github">
          Github <span className="catchError">*</span>
        </label>

        <input
          className="form__input"
          type="text"
          name="github"
          id="github"
          placeholder="Ej: @sally-hill"
          value={props.data.github}
          onChange={props.handleInput}
        />
      </form>

      {renderErrorMessage()}
    </div>
  );
};

export default Fill;
