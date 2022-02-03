import React from 'react';
import PropTypes from 'prop-types';

function GetAvatar(props) {
  const fr = new FileReader();
  const myFileField = React.createRef();

  const uploadImage = (ev) => {
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];
      fr.addEventListener('load', getImage);
      fr.readAsDataURL(myFile);
    }
  };

  const getImage = () => {
    const image = fr.result;
    props.handleInputPhoto(image);
  };

  const avatar = props.avatar === '' ? '' : props.avatar;

  return (
    <div className="get-avatar">
      <label htmlFor="file" className="get-avatar__label">
        <input
          id="file"
          type="file"
          ref={myFileField}
          className="get-avatar__upload-field"
          onChange={uploadImage}
        />
      </label>

      <div
        className="form__image-section--preview js__profile-preview"
        style={{
          backgroundImage: `url(${avatar})`,
        }}
      ></div>
    </div>
  );
}

GetAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  handleInputPhoto: PropTypes.func.isRequired,
};

export default GetAvatar;
