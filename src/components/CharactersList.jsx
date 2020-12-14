import React, { useContext, Fragment } from 'react';
import { CharactersContext } from '../CharactersContext';
import Characters from './Characters';

function CharactersList(props) {
  const { characters } = useContext(CharactersContext);
  console.log("characters : ", characters);

  return (
    <Fragment>
      {characters.map((character) => (
        <Characters
          key={character.id}
          name={character.name}
          location={character.location.name}
          imageSrc={character.image}
        />
      ))}
    </Fragment>
  );
}

export default CharactersList;