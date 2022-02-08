import Palettes from './Palettes';

const Design = (props) => {
  return (
    <section
      className={`paletteandcolours ${props.designOpen ? '' : 'collapsed'}`}
      id="designContent"
    >
      <p className="colourstitle">Colores</p>

      <section className="colours">
        <form className="palettes">
          <input
            className="colourpalette"
            type="radio"
            id="colours1"
            name="palette"
            value="1"
            checked={props.data.palette === '1'}
            onChange={props.handleInput}
          />

          <input
            className="colourpalette"
            type="radio"
            id="colours2"
            name="palette"
            value="2"
            checked={props.data.palette === '2'}
            onChange={props.handleInput}
          />

          <input
            className="colourpalette"
            type="radio"
            id="colours3"
            name="palette"
            value="3"
            checked={props.data.palette === '3'}
            onChange={props.handleInput}
          />
        </form>

        <section className="palettescolours">
          <Palettes paletteClass="1" />
          <Palettes paletteClass="2" />
          <Palettes paletteClass="3" />
        </section>
      </section>
    </section>
  );
};

export default Design;
