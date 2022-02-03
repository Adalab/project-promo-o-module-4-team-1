const Palettes = (props) => {
  return (
    <label htmlFor={`colours${props.paletteClass}`}>
      <ul className={`colours${props.paletteClass}`}>
        <li className={`palette${props.paletteClass} colour1`}></li>
        <li className={`palette${props.paletteClass} colour2`}></li>
        <li className={`palette${props.paletteClass} colour3`}></li>
      </ul>
    </label>
  );
};

export default Palettes;
