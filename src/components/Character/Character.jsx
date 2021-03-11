import React from 'react';
import { CharacterContainer } from './Character.styled';

const Character = (props) => {
  const { name, image, character, handleSetFavorite, handleDeleteFavorite, type, favoriteId } = props;

  return (
    <CharacterContainer>
      {type === 'favorite' ? (
        <figure onClick={() => handleDeleteFavorite(favoriteId)}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 496 496"
            transform="rotate(45)"
          >
            <circle cx="248" cy="248" r="248" />
            <path
              d="M400.1,210H286V95.9a25.4,25.4,0,0,0-25.3-25.4H235.3A25.4,25.4,0,0,0,210,95.9V210H95.9a25.4,25.4,0,0,0-25.4,25.3v25.4A25.4,25.4,0,0,0,95.9,286H210V400.1a25.4,25.4,0,0,0,25.3,25.4h25.4A25.4,25.4,0,0,0,286,400.1V286H400.1a25.4,25.4,0,0,0,25.4-25.3V235.3A25.4,25.4,0,0,0,400.1,210Z"
              fill="white"
            />
          </svg>
        </figure>
      ) : (
        <figure onClick={() => handleSetFavorite(character)}>
          <svg width="40" height="40" viewBox="0 0 496 496">
            <circle cx="248" cy="248" r="248" />
            <path
              d="M400.1,210H286V95.9a25.4,25.4,0,0,0-25.3-25.4H235.3A25.4,25.4,0,0,0,210,95.9V210H95.9a25.4,25.4,0,0,0-25.4,25.3v25.4A25.4,25.4,0,0,0,95.9,286H210V400.1a25.4,25.4,0,0,0,25.3,25.4h25.4A25.4,25.4,0,0,0,286,400.1V286H400.1a25.4,25.4,0,0,0,25.4-25.3V235.3A25.4,25.4,0,0,0,400.1,210Z"
              fill="white"
            />
          </svg>
        </figure>
      )}

      <figure className="img">
        <img src={image} alt="" />
      </figure>
      <h4>{name}</h4>
    </CharacterContainer>
  );
};

export default Character;
