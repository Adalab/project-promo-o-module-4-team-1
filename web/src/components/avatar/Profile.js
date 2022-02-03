import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../../images/defaultAvatar.png';

function Profile(props) {
  const avatar = props.avatar === '' ? defaultAvatar : props.avatar;

  return (
    <div
      className="profile__avatar card-preview__photo js__profile-image"
      style={{ backgroundImage: `url(${avatar})` }}
    ></div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Profile;
