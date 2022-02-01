import Palettes from "./Palettes";

const Design = (props) => {
  return (
    <section
      className={`paletteandcolours js-sectionDesign js_content ${props.designOpen ? '' : 'collapsed'}`}
      id="designContent"
    >
      <p className="colourstitle">Colores</p>

      <section className="colours">
        <form className="palettes">
          <input
            type="radio"
            value="1"
            id="colours1"
            name="palette"
            className="colourpalette"
            onChange={props.handleInput}
            checked={props.data.palette === "1"}
          />
          <input
            type="radio"
            value="2"
            id="colours2"
            name="palette"
            className="colourpalette"
            onChange={props.handleInput}
            checked={props.data.palette === "2"}
          />
          <input
            type="radio"
            value="3"
            id="colours3"
            name="palette"
            className="colourpalette"
            onChange={props.handleInput}
            checked={props.data.palette === "3"}
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
