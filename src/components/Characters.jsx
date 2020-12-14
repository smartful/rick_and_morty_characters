import React from 'react';

function Character({name, location, imageSrc}) {
  const characterStyle = {
    border: '3px solid #61dafb',
    borderRadius: '6px',
    padding: '10px',
    margin: '15px',
  }

  return (
    <div style={characterStyle}>
      {name} - {location} <br />
      <img src={imageSrc} alt='character image' />
    </div>
  );
}

export default Character;