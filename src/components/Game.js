import { useContext } from 'react';
import { PokeContext } from '../context/context';
import {useState, useEffect} from 'react';
import PokeOutcome from './PokeOutcome';
import {Heading } from 'grommet';
import { ThemeConsumer } from 'styled-components';



const Game = ({value}) => {


const {pokedex, selectedPoke, setSelectedPoke} = useContext(PokeContext);

//the 3 random pokemon...
const [poke1, setPoke1] = useState();
const [poke2, setPoke2] = useState();
const [poke3, setPoke3] = useState();

// variables necessary to roll and calculate the outcome
const [roll, setRoll] = useState(0);
const [result, setResult] = useState();
const [score, setScore] = useState(0);
const [showScore, setShowScore] = useState(false)

//when you click on 'Roll' 

const getRoll = () =>
{
         const random = () => Math.floor(Math.random()*10);
         setShowScore(false);
         if(typeof pokedex !='undefined') 
            {
            setPoke1(pokedex[random()])
            setPoke2(pokedex[random()])
            setPoke3(pokedex[random()])
            }
         else{console.log('Loading')}

         setRoll(prevRoll=>prevRoll+1)

         return "console.log('OK')"
}


// When you click on'get a pokemon'... 
const getPoke = () => {
   const random = () => Math.floor(Math.random()*10);
   if(typeof pokedex !='undefined') 
      {
      setSelectedPoke(pokedex[random()]);
      }
   }

// When you click on 'Show your score'.... 
const calculateResult = () => 
      {
                     if(selectedPoke.id == poke1.id && selectedPoke.id==poke2.id && selectedPoke.id==poke3.id)
                     {
                        setScore(prevScore => prevScore+300);
                        console.log(`selected: ${selectedPoke.id} poke1:${poke1.id}, poke2: ${poke2.id}, poke3:${poke3.id}`)
                        setResult(<div> Wow! Perfect Score! You got 300 points and Pikachu loves you! </div>)
                        setShowScore(true);


                     }
                     else if((selectedPoke.id== poke1.id && selectedPoke.id==poke2.id)
                     || (selectedPoke.id == poke2.id && selectedPoke.id ==poke3.id)
                     || (selectedPoke.id == poke3.id && selectedPoke == poke1.id))
                     
                     {
                        console.log(`selected: ${selectedPoke.id} poke1:${poke1.id}, poke2: ${poke2.id}, poke3:${poke3.id}`)
                        setScore(prevScore => prevScore+200);
                        setShowScore(true);

                        setResult(<div> Almost perfect! You score 200 points and Pikachu likes you! </div>)
                     }

                     else if(selectedPoke.id== poke1.id
                        ||selectedPoke.id == poke2.id
                        ||selectedPoke.id == poke3.id)
                     {
                        console.log(`selected: ${selectedPoke.id} poke1:${poke1.id}, poke2: ${poke2.id}, poke3:${poke3.id}`)
                        setScore(prevScore => prevScore+100)
                        setShowScore(true);
                        setResult(<div> Not bad! You score 100 points and Pikachu appreciates your contribution.</div>)
                     }
                     else {
                        console.log(`selected: ${selectedPoke.id} poke1:${poke1.id}, poke2: ${poke2.id}, poke3:${poke3.id}`)
                        setScore(prevScore => prevScore -50);
                        setShowScore(true);
                        setResult(<div> You lost! You loose -50 points and Pikachu is very disappointed with you!</div>)
                     }
              
            }
         
            
// When you click on 'send your score'... 
const sendScore = async ()=>{
   const newScore = {
      name: value,
      pokename: selectedPoke.name, 
      win: false, //because you can NEVER win at gambling :D 
      score:score
    };
    console.log(newScore)
   // event.preventDefault()
   const options = {
     method: 'POST',
     body: JSON.stringify(newScore),
     headers: {
       'Content-Type': 'application/json'
     }
   }
   try {
     const response = await fetch("https://poke-fights-app.herokuapp.com/fights", options)
   } catch (error) {console.log(error)}
}


//! start of return statement 

   return (
   <div> 
      <Heading> Pick your Pokemon, {value}! </Heading>
      <input type="submit" value="GET A RANDOM POKEMON" onClick={getPoke}/>

      {/* When you click on 'get a pokemon' for the first time.... */}
      {selectedPoke
      ?
         (<div> 
            <h2>You got {selectedPoke.name} </h2>
            <img src={selectedPoke.sprites.other["official-artwork"].front_default} /> <br/>
            <input type="submit" value ="ROLL" onClick={getRoll}/>
         </div>)
      :<p></p>
      } 


      {/* When you click on 'roll for the first time.... */}

      {poke1&&roll>0
      ?
         (<div>
            <img src={poke1.sprites.other["official-artwork"].front_default}/>
            <img src={poke2.sprites.other["official-artwork"].front_default}/>
            <img src={poke3.sprites.other["official-artwork"].front_default}/>
            <br/>  <br/>
         <input type="submit" value="Show your Score" onClick={calculateResult}/></div>)
         :<span></span>}
         

      {/* When you click on 'showscore */}
      {showScore?
         (<div><PokeOutcome 

            setResult={setResult} 
            result={result} 
            setScore={setScore} 
            score={score} 
            roll={roll}/>
            <input type="submit" value ="ROLL AGAIN" onClick={getRoll}/>
         <form onSubmit={sendScore}> 
              <input type="submit" value="SEND YOUR SCORE"/> 
         </form>
      
         </div>
         )
      :<span></span>}
      {/* } */}
   
   {/* <PokeCard/> <PokeArena/></span>):<p>Loading</p>} */}
   
</div>      
   )
}

export default Game