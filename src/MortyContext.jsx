import React, { useState, createContext, useEffect } from 'react';

export const MortyContext = createContext();

export const MortyProvider = (props) => {
  const [morties, setMorties] = useState([]);

  useEffect(() => {
    getDeadMorty();
  }, []);

  const getDeadMorty = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character?name=morty&status=dead');
    const data = await response.json();
    setMorties(data.results);
  }

  return (
    <MortyContext.Provider value={[morties, setMorties]} >
      {props.children}
    </MortyContext.Provider>
  );
}