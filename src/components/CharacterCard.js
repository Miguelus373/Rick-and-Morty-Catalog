import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = ({ name, status, image }) => (
  <div>
    <img alt={name} src={image.JPG} />
    <h3>{name}</h3>
    <span>
      {status}
    </span>
  </div>
);

CharacterCard.propTypes = {
  // id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CharacterCard;
