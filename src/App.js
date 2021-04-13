import './App.css';
import { useContext } from 'react';
import { PokeContext } from './context/context';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { Grommet, Box } from 'grommet';
import OnHeaderNav from './grommet/header';

/* components */
import NewGame from './components/NewGame';
import Score from './components/Score';


function App() {


  const pokeTheme = {
    global: { font: { 
                        family: 'poke', size: '20px', height: '20px'}, 
                        colors: {text: {"dark": "yellow", "light": "#444444"}
                    },
              control:  {
                border:{ radius: '50px'}
              },
              input: { padding: {"horizontal": "50px"}},
              focus: { border: { color: 'red'}}
            },
  };

  const {pokedex} = useContext(PokeContext)
  console.log(pokedex)
  return (
    <React.StrictMode>
      <Grommet  background="black" theme={pokeTheme}> 
        <Box height="100vh" width="100vw">

          <OnHeaderNav />
          <Box   
                 align="center"
                 basis="full"
                 background="white"
                 >
              <Switch>
                
                <Route exact path="/play" render={ ()=> <NewGame/> } />
                <Route exact path="/Score" render={ ()=> <Score/> } />
                {/* <Route path="*" component={PageNotFound} /> */}
              </Switch>
          </Box>
        </Box>
      </Grommet> 
         

     
      {/* <img alt="" src="https://res.cloudinary.com/lmn/image/upload/c_limit,h_392,w_696/e_sharpen:100/f_auto,fl_lossy,q_auto/v1/gameskinnyc/a/6/0/a6078c-2fd9033b2be04c9b947d1aac6cdaef60-a2551.gif"/>

      <h1>Gotta catch them all!!! </h1>
      <ul>
        {pokedex.map(pokemon => <li><strong>{pokemon.name}</strong>: HP:{pokemon.stats[0].base_stat} Attack:{pokemon.stats[1].base_stat} Defense: {pokemon.stats[2].base_stat} Id:{pokemon.id}<img alt="" src={pokemon.sprites.front_default}/></li>)}
      </ul>  */}
      

    </React.StrictMode>
  );
}

export default App;
