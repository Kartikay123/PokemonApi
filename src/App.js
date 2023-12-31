import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Searchbox from './Components/Searchbox/Searchbox';
import Selecttype from './Components/Selecttype/Selecttype';

function App() {
  const [searchfield,setsearchfield]= useState('');
  const [pokemonData,setpokemonData]=useState([]);
  const [filterData,setfilterData]=useState(pokemonData);
  const [uniqueTypes, setUniqueTypes] = useState([]);


  useEffect(() => {
    const filtering = pokemonData.filter((pokemon) => {
      const nameMatches = pokemon.name.toLowerCase().includes(searchfield);
      const idMatches = String(pokemon.id).includes(searchfield); // Convert ID to string for comparison
  
      return nameMatches || idMatches;
    });
  
    setfilterData(filtering);
  }, [pokemonData, searchfield]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
      .then((response) => response.json())
      .then(async (data) => {
        const pokemonList = await Promise.all(
          data.results.map(async (pokemon, index) => {
            const pokemonResponse = await fetch(pokemon.url);
            const pokemonData = await pokemonResponse.json();
            return {
              id: index + 1,
              name: pokemon.name,
              type: pokemonData.types.map((type) => type.type.name),
            };
          })
        );

        setpokemonData(pokemonList);

        // Extract unique types
        const typesSet = new Set();
        pokemonList.forEach((pokemon) => {
          pokemon.type.forEach((type) => {
            typesSet.add(type);
          });
        });

        setUniqueTypes(Array.from(typesSet));
      });
  }, []);


  const OnSearchPokemon=(e) => {
     const data = e.target.value.toLocaleLowerCase();
     setsearchfield(data);
  }
  
  const handleTypeSelect = (e) => {
    const selectedType = e.target.value;
    if (selectedType === '') {
      setfilterData(pokemonData);
    } else {
      const filteredByType = pokemonData.filter((pokemon) => {
        return pokemon.type.includes(selectedType);
      });
      setfilterData(filteredByType);
    }
  };


  return (
    <div className="App">
      <Searchbox handler={OnSearchPokemon} 
        placeholder='search-pokemon by name or id' 
        className='search-box'/>
        <Selecttype type={uniqueTypes} handleTypeSelect={handleTypeSelect} />
      <HomePage data={filterData}/>
    </div>
  );
}

export default App;
