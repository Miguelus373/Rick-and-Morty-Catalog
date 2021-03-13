import React from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/card.module.css';

const CharacterCard = ({ name, status, image }) => (
  <div className={`${styles.card} ${styles[status]}`}>
    <img alt={name} src={image} className={styles.portrait} />
    <h4 className={styles.name}>{name}</h4>
  </div>
);

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CharacterCard;
