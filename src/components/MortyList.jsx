import React, { useContext, Fragment } from 'react';
import { MortyContext } from '../MortyContext';
import Morty from './Morty';

function MortyList(props) {
  const [morties, setMorties] = useContext(MortyContext);
  console.log("morties : ", morties);

  return (
    <Fragment>
      {morties.map((morty) => (
        <Morty
          key={morty.id}
          name={morty.name}
          location={morty.location.name}
          imageSrc={morty.image}
        />
      ))}
    </Fragment>
  );
}

export default MortyList;