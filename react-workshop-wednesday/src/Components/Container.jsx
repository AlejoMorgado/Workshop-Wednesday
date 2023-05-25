import React, { useEffect, useState } from 'react';
import fetchData from '../helpers/fetchSwapi';
import ContentContainer from './ContentContainer';
import './Container.css'

const Container = () => {
  const [character, setCharacter] = useState({});
  const [characterId, setCharacterId] = useState(1);

  const fetchCharacterData = async () => {
    try {
      const data = await fetchData(characterId);
      console.log(data);
      setCharacter(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCharacterData();
  }, [characterId]);

  const nextCharacter = () => {
    setCharacterId(characterId + 1);
  };

  return (
    <div className='wrapper'>
      <ContentContainer
        gender={character.gender}
        birthYear={character.birth_year}
        eyeColor={character.eye_color}
        hairColor={character.hair_color}
        mass={character.mass}
        skinColor={character.skin_color}
        name={character.name}
        height={character.height}
        onButtonClick={nextCharacter}
      />
    </div>
  );
};

export default Container;
