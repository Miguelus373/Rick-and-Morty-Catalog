import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleCharacter, useLocalCharacter } from '../actions/index';
import styles from '../assets/details.module.css';

const CharacterDetails = () => {
  let { id } = useParams();
  id = parseInt(id, 10);
  const dispatch = useDispatch();
  const localChr = useSelector(state => state.characters).find(chr => chr.id === id);

  useEffect(() => {
    if (localChr) {
      dispatch(useLocalCharacter(localChr));
    } else {
      dispatch(getSingleCharacter(id));
    }
  }, []);

  const details = useSelector(state => state.details);

  if (details.name) {
    const {
      name, image, status, species, type, location,
    } = details;
    return (
      <>
        <h1 className={styles.name}>{name}</h1>
        <div className={styles.container}>
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
