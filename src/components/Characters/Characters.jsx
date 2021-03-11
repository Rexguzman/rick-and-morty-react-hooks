import React, {
  useState,
  useEffect,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from 'react';
import { Character, SearchBar } from '..';
import {
  CharactersContainer,
  EmpyFavoriteContainer,
} from './Characters.styled';

const initialState = {
  favorites: [],
};

let favoriteId = 0;

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      favoriteId = favoriteId + 1;
      const payload = {
        ...action.payload,
        favoriteId,
      };
      return {
        ...state,
        favorites: [...state.favorites, payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(
          (item) => item.favoriteId !== action.payload
        ),
      };
    default:
      return state;
  }
};

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleSetFavorite = (favorite) => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite });
  };

  const handleDeleteFavorite = (favorite) => {
    dispatch({ type: 'DELETE_FAVORITE', payload: favorite });
  };

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  const filteredCharacters = useMemo(
    () =>
      characters.filter((character) =>
        character.name.toLowerCase().includes(search.toLowerCase())
      ),
    [characters, search]
  );

  return (
    <React.Fragment>
      {favorites.favorites.length === 0 ? (
        <EmpyFavoriteContainer>
          <h2>Favoritos</h2>
          <div>
            <figure>
              <svg width="50px" height="50px" viewBox="0 0 640 512">
                <path
                  fill="currentColor"
                  d="M425.7 256c-16.9 0-32.8-9-41.4-23.4L320 126l-64.2 106.6c-8.7 14.5-24.6 23.5-41.5 23.5-4.5 0-9-.6-13.3-1.9L64 215v178c0 14.7 10 27.5 24.2 31l216.2 54.1c10.2 2.5 20.9 2.5 31 0L551.8 424c14.2-3.6 24.2-16.4 24.2-31V215l-137 39.1c-4.3 1.3-8.8 1.9-13.3 1.9zm212.6-112.2L586.8 41c-3.1-6.2-9.8-9.8-16.7-8.9L320 64l91.7 152.1c3.8 6.3 11.4 9.3 18.5 7.3l197.9-56.5c9.9-2.9 14.7-13.9 10.2-23.1zM53.2 41L1.7 143.8c-4.6 9.2.3 20.2 10.1 23l197.9 56.5c7.1 2 14.7-1 18.5-7.3L320 64 69.8 32.1c-6.9-.8-13.5 2.7-16.6 8.9z"
                ></path>
              </svg>
            </figure>
            <p>Aún no tienes ningun personaje en favoritos 😣</p>
          </div>
        </EmpyFavoriteContainer>
      ) : (
        <CharactersContainer>
          <h2>Favoritos</h2>
          {favorites.favorites.map((character) => (
            <Character
              character={character}
              name={character.name}
              image={character.image}
              key={character.favoriteId}
              favoriteId={character.favoriteId}
              type="favorite"
              handleDeleteFavorite={handleDeleteFavorite}
            />
          ))}
        </CharactersContainer>
      )}
      <CharactersContainer>
        <h2>Personajes</h2>
        <SearchBar
          value={search}
          handleSearch={handleSearch}
          reference={searchInput}
        />
        {filteredCharacters.map((character) => (
          <Character
            character={character}
            name={character.name}
            image={character.image}
            key={character.id}
            handleSetFavorite={handleSetFavorite}
          />
        ))}
      </CharactersContainer>
    </React.Fragment>
  );
};

export default Characters;
