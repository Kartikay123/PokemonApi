import React, { useEffect, useState } from "react";
import './Pokeinfo.css';
import { LinearProgress } from '@mui/material';

const Pokeinfo = ({ data }) => {
    const [pokemonInfo, setPokemonInfo] = useState(null);

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${data}`);
                const pokemonData = await response.json();
                setPokemonInfo(pokemonData);
            } catch (error) {
                console.error("Error fetching Pokemon data:", error);
            }
        };

        if (data && data) {
            fetchPokemonData();
        }
    }, [data]);

    return (
        <>
            {pokemonInfo && (
                <>
                   
                  
                    <div className="abilities">
                        <h2 className="text-center">Abilities:</h2>
                        <ul>
                            {pokemonInfo.abilities.map((ability, index) => (
                                <li key={index}>{ability.ability.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="stats">
                        <h2>Stats:</h2>
                        <ul>
                            {pokemonInfo.stats.map((stat, index) => (
                                <li key={index}>
                                    {stat.stat.name}:
                                    <LinearProgress
                                        variant="determinate"
                                        value={stat.base_stat}
                                        valueBuffer={100}
                                        sx={{ width: '200px', marginTop: '8px' }}
                                        color="success"
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </>
    )
}

export default Pokeinfo;


