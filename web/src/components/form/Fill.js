import GetAvatar from '../avatar/GetAvatar';

const Fill = (props) => {
  return (
    <form className="form js-form">
      <div
        className={`js-sectionFill js_content ${
          props.fillOpen ? '' : 'collapsed'
        }`}
        id="formContent"
      >
        <fieldset>
          <label className="form__label" htmlFor="name">
            Nombre completo
          </label>

          <input
            className="form__input js-full_name"
            type="text"
            name="name"
            id="name"
            placeholder="Ej: Sally Jill"
            value={props.data.name}
            onChange={props.handleInput}
          />

          <label className="form__label" htmlFor="job">
            Puesto
          </label>

          <input
            className="form__input js-job"
            type="text"
            name="job"
            id="job"
            placeholder="Ej: Front-end unicorn"
            value={props.data.job}
            onChange={props.handleInput}
          />

          <label className="form__label" htmlFor="image">
            Imagen de perfil
          </label>

          <div className="form__image-section">
            <label
              className="form__image-section--add js__profile-trigger"
              htmlFor="file"
            >
              Añadir imagen
            </label>

            <GetAvatar
              avatar={props.data.photo}
              handleInputPhoto={props.handleInputPhoto}
            />
          </div>

          <label className="form__label" htmlFor="email">
            Email
          </label>

          <input
            className="form__input js-email"
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
            className="form__input js-phone"
            type="tel"
            pattern=""
            name="phone"
            id="phone"
            placeholder="Ej: 555-55-55-55"
            value={props.data.phone}
            onChange={props.handleInput}
          />

          <label className="form__label" htmlFor="linkedin">
            Linkedin
          </label>

          <input
            className="form__input js-linkedin"
            type="text"
            name="linkedin"
            id="linkedin"
            placeholder="Ej: linkedin.com/in/sally.hill"
            value={props.data.linkedin}
            onChange={props.handleInput}
          />

          <label className="form__label" htmlFor="github">
            Github
          </label>

          <input
            className="form__input js-github"
            type="text"
            name="github"
            id="github"
            placeholder="Ej: @sally-hill"
            value={props.data.github}
            onChange={props.handleInput}
          />
        </fieldset>
      </div>
    </form>
  );
};

export default Fill;
