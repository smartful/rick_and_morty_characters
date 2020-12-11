import React from 'react';

function Morty({name, location, imageSrc}) {
  const mortyStyle = {
    border: '3px solid #61dafb',
    borderRadius: '6px',
    padding: '10px',
    margin: '15px',
  }

  return (
    <div style={mortyStyle}>
      {name} - {location} <br />
      <img src={imageSrc} alt='morty image' />
    </div>
  );
}

export default Morty;