import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { PokeContext } from './context/context';

function App() {
  const {pokedex} = useContext(PokeContext)

  return (
    <div className="App">
      <img src="https://res.cloudinary.com/lmn/image/upload/c_limit,h_392,w_696/e_sharpen:100/f_auto,fl_lossy,q_auto/v1/gameskinnyc/a/6/0/a6078c-2fd9033b2be04c9b947d1aac6cdaef60-a2551.gif"/>

      <h1>Gotta catch them all!!! </h1>
      <ul>
        {pokedex.map(pokemon => <li><strong>{pokemon.name}</strong>: HP:{pokemon.stats[0].base_stat} Attack:{pokemon.stats[1].base_stat} Defense: {pokemon.stats[2].base_stat} Id:{pokemon.id}<img src={pokemon.sprites.back_default}/></li>)}
        </ul> 
      

    </div>
  );
}

export default App;
