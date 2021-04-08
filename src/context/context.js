import React, { createContext, useState, useEffect } from 'react';

export const PokeContext = createContext();

const PokeState = ({ children }) => {
  const [pokedex, setPokedex] = useState([]);
  const [selectedPoke, setSelectedPoke] = useState();

  useEffect(() => {
    //! Preferably put all this into backend
    const getPoke = async () => {
       const data = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=151')
       const pokemons = await data.json();
       const pokeStats = await Promise.all(
         pokemons.results.map(singlePoke => fetch(singlePoke.url).then(res => res.json()))
        )
        .then(value => value);

      setPokedex(pokeStats)
    }
   getPoke();}, [])


  return (
    <PokeContext.Provider
      value={{ pokedex, selectedPoke, setSelectedPoke}}
    >
      {children}
    </PokeContext.Provider>
  );
};

export default PokeState;