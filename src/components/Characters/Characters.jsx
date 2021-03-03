import React, { useState, useEffect } from 'react';
import { Character } from '..';
import { CharactersContainer } from './Characters.styled';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <CharactersContainer>
      {characters.map((character) => (
        <Character
          name={character.name}
          image={character.image}
          key={character.id}
        />
      ))}
    </CharactersContainer>
  );
};

export default Characters;
