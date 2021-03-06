import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCharacter } from 'rickmortyapi';
import { setCharacter } from '../actions/index';
import styles from '../assets/details.module.css';
import Arrow from '../assets/arrow.svg';

const CharacterDetails = () => {
  let { id } = useParams();
  id = parseInt(id, 10);
  const dispatch = useDispatch();
  const localChr = useSelector(state => state.characters.all).find(chr => chr.id === id);

  useEffect(() => {
    if (localChr) {
      dispatch(setCharacter(localChr));
    } else {
      getCharacter(id)
        .then(character => dispatch(setCharacter(character)))
        .catch(() => []);
    }
  }, []);

  const details = useSelector(state => state.details);

  if (details.id === id) {
    const {
      name, image, status, species, type, location,
    } = details;
    return (
      <>
        <h1 className={styles.name}>{name}</h1>
        <div className={styles.container}>
          <Link to="/">
            <img src={Arrow} className={styles.backArrow} alt="Go Back" />
          </Link>
          <img src={image} alt={name} className={styles.portrait} />
          <div className={styles.info}>
            <p className={styles.detail}>
              <span>Status:</span>
              <span>{status}</span>
            </p>
            <p className={styles.detail}>
              <span>Species:</span>
              <span>{species}</span>
            </p>
            <p className={styles.detail}>
              <span>Type:</span>
              <span>{type}</span>
            </p>
            <p className={styles.detail}>
              <span>Location:</span>
              <span>{location.name}</span>
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <p>Loading...</p>
  );
};

export default CharacterDetails;
