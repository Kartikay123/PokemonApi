import React, { useState, useEffect } from "react";
import './Pokeinfo.css';
import axios from 'axios';

const Pokeinfo = ({ data }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    if (data) {
      axios.get(data.url)
        .then((response) => {
          setPokemonDetails(response.data);
        })
        .catch((error) => {
          console.error('Error fetching Pokemon details:', error);
        });
    }
  }, [data]);

  return (
    <div className="poke-info">
      {
        !pokemonDetails ? <div>Loading...</div> :
          <>
            <h1>{pokemonDetails.name}</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonDetails.id}.svg`} alt="" />
            <div className="abilities">
              <h2>Abilities:</h2>
              {
                pokemonDetails.abilities.map((ability, index) => (
                  <div className="group" key={index}>
                    <p>{ability.ability.name}</p>
                  </div>
                ))
              }
            </div>
            <div className="types">
              <h2>Types:</h2>
              {
                pokemonDetails.types.map((type, index) => (
                  <div className="group" key={index}>
                    <p>{type.type.name}</p>
                  </div>
                ))
              }
            </div>
          </>
      }
    </div>
  )
}

export default Pokeinfo;
