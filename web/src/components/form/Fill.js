import GetAvatar from "../avatar/GetAvatar";

const Fill = (props) => {
  return (
    <form action="" method="post" className="form js-form">
      <div className={`js-sectionFill js_content ${props.fillOpen ? '' : 'collapsed'}`} id="formContent">
        <fieldset>
          <label htmlFor="name" className="form__label">
            Nombre completo
          </label>
          <input
            type="text"
            placeholder="Ej: Sally Jill"
            name="name"
            id="name"
            className="form__input js-full_name"
            value={props.data.name}
            onChange={props.handleInput}
            required
            pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}"
          />
          <label htmlFor="job" className="form__label">
            Puesto
          </label>
          <input
            type="text"
            placeholder="Ej: Front-end unicorn"
            name="job"
            id="job"
            className="form__input js-job"
            pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}"
            value={props.data.job}
            onChange={props.handleInput}
            required
          />

          <label htmlFor="image" className="form__label">
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
              updateInputPhoto={props.updateInputPhoto}
              avatar={props.data.photo}
            />
          </div>

          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input
            type="email"
            placeholder="Ej: sally-hill@gmail.com "
            name="email"
            id="email"
            className="form__input js-email"
            value={props.data.email}
            onChange={props.handleInput}
            required
          />

          <label htmlFor="phone" className="form__label">
            Teléfono
          </label>
          <input
            type="tel"
            placeholder="Ej: 555-55-55-55"
            pattern=""
            name="phone"
            id="phone"
            className="form__input js-phone"
            value={props.data.phone}
            onChange={props.handleInput}
            /*pattern=" ^(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}" */
          />

          <label htmlFor="linkedin" className="form__label">
            Linkedin
          </label>
          <input
            type="text"
            placeholder="Ej: linkedin.com/in/sally.hill"
            name="linkedin"
            id="linkedin"
            className="form__input js-linkedin"
            value={props.data.linkedin}
            onChange={props.handleInput}
            required
          />
          <label htmlFor="github" className="form__label">
            Github
          </label>
          <input
            type="text"
            placeholder="Ej: @sally-hill"
            name="github"
            id="github"
            className="form__input js-github"
            value={props.data.github}
            onChange={props.handleInput}
          />
        </fieldset>
      </div>
    </form>
  );
};
export default Fill;
