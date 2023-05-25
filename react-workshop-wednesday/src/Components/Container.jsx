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
        name={character.name}
        height={character.height}
        onButtonClick={nextCharacter}
      />
    </div>
  );
};

export default Container;
