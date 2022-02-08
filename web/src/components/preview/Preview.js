import PreviewIcons from './PreviewIcons';
import Profile from '../avatar/Profile';

function Preview(props) {
  const changePalette = () => {
    let paletteClass = '--palette1';
    if (props.data.palette === '1') {
      paletteClass = '--palette1';
    } else if (props.data.palette === '2') {
      paletteClass = '--palette2';
    } else if (props.data.palette === '3') {
      paletteClass = '--palette3';
    }
    return paletteClass;
  };

  return (
    <section className="card_hero">
      <button
        onClick={props.handleClickReset}
        className="card_reset"
        title="Reset"
      >
        <i className="card_reset__icon far fa-trash-alt"></i> Reset
      </button>

      <div className="card-preview">
        <div
          className={`card-preview__header card-preview__header${changePalette()}`}
        >
          <h3
            className={`card-preview__title card-preview__title${changePalette()}`}
          >
            {props.data.name || 'Nombre completo'}
          </h3>
          <p className="card-preview__subtitle">
            {props.data.job || 'Front-end developer'}
          </p>
        </div>
        <Profile avatar={props.data.photo} />
        {/* <div
              className="card-preview__photo js__profile-image"
              style={{
                backgroundImage: `url(${
                  props.data.photo || 'https://www.fillmurray.com/240/200'
                })`,
              }}
            ></div> */}
        <nav className="card-preview__nav">
          <ul className="card__socialmedia">
            <PreviewIcons
              data={props.data}
              changePalette={changePalette()}
              url={`tel:${props.data.phone || ''}`}
              alt="mobile"
              className="fas fa-mobile-alt"
              isBlank={false}
            />
            <PreviewIcons
              data={props.data}
              changePalette={changePalette()}
              url={`mailto:${props.data.email || ''}`}
              alt="email"
              className="far fa-envelope"
              isBlank={false}
            />
            <PreviewIcons
              data={props.data}
              changePalette={changePalette()}
              url={`http://www.linkedin.com/in/${props.data.linkedin}`}
              alt="linkedin"
              className="fab fa-linkedin-in"
              isBlank={true}
            />
            <PreviewIcons
              data={props.data}
              changePalette={changePalette()}
              url={`https://github.com/${props.data.github}`}
              alt="github"
              className="fab fa-github-alt"
              isBlank={true}
            />
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Preview;
