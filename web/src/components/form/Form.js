import InputLabel from './InputLabel';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

function Form(props) {
  return (
    <section className="background_features">
      <section className="container containerdesign">
        <InputLabel
          id="designContent"
          icon="far fa-object-ungroup"
          title="Diseña"
          arrow={props.designOpen}
          handleClickCollap={props.handleClickCollap}
        />
        <Design
          data={props.data}
          handleInput={props.handleInput}
          designOpen={props.designOpen}
        />
      </section>
      <section className="section__form container containerdesign">
        <InputLabel
          id="formContent"
          icon="far fa-keyboard"
          title="Rellena"
          arrow={props.fillOpen}
          handleClickCollap={props.handleClickCollap}
        />
        <Fill
          data={props.data}
          handleInput={props.handleInput}
          updateInputPhoto={props.updateInputPhoto}
          fillOpen={props.fillOpen}
        />
      </section>
      <section className="container containerdesign">
        <InputLabel
          id="shareContent"
          icon="fas fa-share-alt"
          title="Comparte"
          arrow={props.shareOpen}
          handleClickCollap={props.handleClickCollap}
        />
        <Share
          data={props.data}
          isDisabled={props.isDisabled}
          shareOpen={props.shareOpen}
          handleClickBtn={props.handleClickBtn}
          shareUrl={props.shareUrl}
          shareSuccess={props.shareSuccess}
        />
      </section>
    </section>
  );
}

export default Form;
