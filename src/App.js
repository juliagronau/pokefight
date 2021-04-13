import './App.css';
import { useContext } from 'react';
import { PokeContext } from './context/context';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { Grommet, Box } from 'grommet';
import OnHeaderNav from './grommet/header';

/* components */
import NewGame from './components/NewGame';
import HighScore from "./components/HighScore";
import Warning from "./components/Warning";



function App() {

  const pokeTheme = {
    global: { font: { 
                family: 'poke', size: '20px', height: '20px'}, 
                colors: { text: {"dark": "yellow", "light": "#444444"}
              },
              control: { border:{ radius: '50px'} },
              input: { padding: {"horizontal": "50px"}},
              focus: { border: { color: 'red'}}
            },
  };

  const {pokedex} = useContext(PokeContext)
  console.log(pokedex)
  return (
    
    <React.StrictMode>
      <Grommet  background="white" theme={pokeTheme}> 
        <Box  height={{ 'min': '100vh', 'max': '100%' }} width="100vw">

          <OnHeaderNav theme={pokeTheme} />
          <Box   
                  flex="grow"
                 align="center"
                 pad="50px"
                 basis="full"
                 >
              <Switch>
                <Route exact path="/">
                  <ul>
                    {pokedex.map(pokemon => (
                      <li>
                        <strong>{pokemon.name}</strong>: HP:{pokemon.stats[0].base_stat}{" "}
                        Attack:{pokemon.stats[1].base_stat} Defense:{" "}
                        {pokemon.stats[2].base_stat} Id:{pokemon.id}
                        <img src={pokemon.sprites.back_default} />
                      </li>
                    ))}
                  </ul>
                </Route>

                <Route exact path="/play" render={ ()=> <NewGame/> } />
                <Route exact path="/highscore" render={ ()=> <HighScore/> }/>
                <Route exact path="/addiction-warning" render={ ()=> <Warning /> }/>
                
                {/* <Route path="*" component={PageNotFound} /> */}

              </Switch>
          </Box>
        </Box>
      </Grommet> 
    </React.StrictMode>
  );
}

export default App;
