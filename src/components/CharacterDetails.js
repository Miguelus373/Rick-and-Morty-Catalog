import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleCharacter } from '../actions/index';

const CharacterDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleCharacter(parseInt(id, 10)));
  }, []);

  const character = useSelector(state => state.characterReducer)[0];

  if (character) {
    const {
      name, image, status, species, type, location,
    } = character;
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
