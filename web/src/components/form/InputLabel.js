function InputLabel(props) {
  const handleClickCollap = () => {
    props.handleClickCollap(props.title);
  };

  return (
    <div className="design" id={props.id} onClick={handleClickCollap}>
      <div className="section__bar--icontitle titleShare__titleIcon">
        <i className={props.icon}></i>

        <h4 className="designtitle">{props.title}</h4>
      </div>

      <i className={`fas fa-chevron-${props.arrow ? 'up' : 'down'}`}></i>
    </div>
  );
}

export default InputLabel;
