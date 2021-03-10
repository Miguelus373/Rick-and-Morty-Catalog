import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleCharacter, useLocalCharacter } from '../actions/index';

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
        <img src={image} alt={name} />
        <p>{name}</p>
        <p>{status}</p>
        <p>{species}</p>
        <p>{type}</p>
        <p>{location.name}</p>
      </>
    );
  }

  return (
    <p>Loading...</p>
  );
};

export default CharacterDetails;
