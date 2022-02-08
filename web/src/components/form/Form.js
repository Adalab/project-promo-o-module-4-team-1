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
          designOpen={props.designOpen}
          handleInput={props.handleInput}
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
          fillOpen={props.fillOpen}
          errorMessage={props.errorMessage}
          handleInput={props.handleInput}
          handleInputPhoto={props.handleInputPhoto}
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
          shareOpen={props.shareOpen}
          shareUrl={props.shareUrl}
          errorMessage={props.errorMessage}
          handleClickBtn={props.handleClickBtn}
        />
      </section>
    </section>
  );
}

export default Form;
