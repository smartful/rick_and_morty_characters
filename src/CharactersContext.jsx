import React, { useState, createContext, useEffect } from 'react';

export const CharactersContext = createContext();

export const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('morty');
  const [status, setStatus] = useState('alive');

  useEffect(() => {
    getCharacters();
  }, [name, status]);

  const getCharacters = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character?name=${name}&status=${status}`);
    const data = await response.json();
    setCharacters(data.results);
  }

  return (
    <CharactersContext.Provider value={{
      characters,
      setCharacters,
      name,
      setName,
      status,
      setStatus
    }} >
      { children }
    </CharactersContext.Provider>
  );
}