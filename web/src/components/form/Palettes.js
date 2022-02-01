const Palettes = (props) => {
  return (
    <ul className={`colours${props.paletteClass}`}>
      <li className={`palette${props.paletteClass} colour1`}></li>
      <li className={`palette${props.paletteClass} colour2`}></li>
      <li className={`palette${props.paletteClass} colour3`}></li>
    </ul>
  );
};
export default Palettes;
