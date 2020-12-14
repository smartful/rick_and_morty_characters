import React, { useContext } from 'react';
import { CharactersContext } from '../CharactersContext';

function Filters() {
  const { name, setName, status, setStatus } = useContext(CharactersContext);

  const selectorStyle = {
    marginRight: '20px',
    padding: '5px',
  };

  return (
    <form>
      <label htmlFor='name'>Name </label>
      <select id='name' style={selectorStyle} value={name} onChange={(e) => setName(e.target.value)}>
        <option>rick</option>
        <option>morty</option>
      </select>

      <label htmlFor='status'>Status </label>
      <select id='status' style={selectorStyle} value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>alive</option>
        <option>dead</option>
        <option>unknown</option>
      </select>
    </form>
  );
}

export default Filters;