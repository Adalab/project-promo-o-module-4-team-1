import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import callToApi from '../services/callToApi';
import localStorage from '../services/localstorage';
import Header from './Header';
import Footer from './Footer';
import Preview from './preview/Preview';
import Form from './form/Form';
import Landing from './Landing';

function App() {
  // state

  const [data, setData] = useState(
    localStorage.get('data', {
      palette: '1',
      name: '',
      job: '',
      photo: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
    })
  );

  const [designOpen, setDesignOpen] = useState(true);
  const [fillOpen, setFillOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  const [readyToShare, setReadyToShare] = useState(false);
  const [shareUrl, setShareUrl] = useState('');

  // local storage

  useEffect(() => {
    localStorage.set('data', data);
  }, [data]);

  // api

  useEffect(() => {
    if (readyToShare) {
      callToApi(data).then((response) => {
        setShareUrl(response.cardURL);
        setReadyToShare(false);
      });
    }
  }, [readyToShare]);

  // event handlers

  const handleInput = (ev) => {
    const inputChanged = ev.currentTarget.name;
    setData({
      ...data,
      [inputChanged]: ev.currentTarget.value,
    });
  };

  const handleInputPhoto = (avatar) => {
    setData({ ...data, photo: avatar });
  };

  const handleClickBtn = () => {
    setReadyToShare(true);
  };

  const handleClickCollap = (labelName) => {
    if (labelName === 'Diseña') {
      setDesignOpen(!designOpen);
      setFillOpen(false);
      setShareOpen(false);
    } else if (labelName === 'Rellena') {
      setDesignOpen(false);
      setFillOpen(!fillOpen);
      setShareOpen(false);
    } else if (labelName === 'Comparte') {
      setDesignOpen(false);
      setFillOpen(false);
      setShareOpen(!shareOpen);
    }
  };

  const handleClickReset = () => {
    setData({
      palette: '1',
      name: '',
      job: '',
      photo: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
    });
    setShareUrl('');
  };

  // render helpers

  const getErrorMessage = () => {
    const regexOnlyLetters = new RegExp('^([A-ZÁÉÍÓÚa-zñáéíóú ]+[s]*)+$');
    const regexEmail = new RegExp(
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
    );
    const regexPhone = new RegExp('^[0-9]*$');

    let message = '';

    if (data.name.length > 0 && data.name.length <= 1) {
      message = '* El nombre es demasiado corto.';
    } else if (data.name.length > 0 && !regexOnlyLetters.test(data.name)) {
      message = '* El nombre sólo puede contener letras.';
    } else if (data.job.length > 0 && data.job.length <= 2) {
      message = '* La descripción del puesto es demasiado corta.';
    } else if (data.email.length > 0 && !regexEmail.test(data.email)) {
      message = '* El formato del email no es válido.';
    } else if (data.phone.length > 0 && !regexPhone.test(data.phone)) {
      message = '* El formato del teléfono no es válido.';
    } else if (
      data.name.length === 0 ||
      data.job.length === 0 ||
      data.email.length === 0 ||
      data.linkedin.length === 0 ||
      data.github.length === 0 ||
      data.photo.length === 0
    ) {
      message = '* Los campos marcados con asterisco son obligatorios.';
    }

    return message;
  };

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>

        <Route exact path="/CardGenerate">
          <Header className="headerCard" classNameImage="imgCard" />

          <main className="create_card_main">
            <div className="create_card_main__wrapper">
              <Preview data={data} handleClickReset={handleClickReset} />

              <Form
                data={data}
                designOpen={designOpen}
                fillOpen={fillOpen}
                shareOpen={shareOpen}
                shareUrl={shareUrl}
                errorMessage={getErrorMessage}
                handleInput={handleInput}
                handleInputPhoto={handleInputPhoto}
                handleClickBtn={handleClickBtn}
                handleClickCollap={handleClickCollap}
              />
            </div>
          </main>
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
