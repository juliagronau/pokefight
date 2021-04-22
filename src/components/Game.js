import { useContext } from 'react';
import { PokeContext } from '../context/context';
import {useState} from 'react';
import PokeOutcome from './PokeOutcome';
import {Heading, Box } from 'grommet';
 



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
const [antiHack, setAntiHack] = useState(false);

// variable to inform the user when the 'submit' form is sent. 
const [userFeedback, setUserFeedback] = useState(); 

//when you click on 'Roll' 

const getRoll = () =>
{
         const random = () => Math.floor(Math.random()*25);
         setShowScore(false);
         if(typeof pokedex !='undefined') 
            {
            setPoke1(pokedex[random()])
            setPoke2(pokedex[random()])
            setPoke3(pokedex[random()])
            }
         else{console.log('Loading')}
         setAntiHack(true)
         setRoll(prevRoll=>prevRoll+1)

         return "console.log('OK')"
}


// When you click on'get a pokemon'... 
const getPoke = () => {
   const random = () => Math.floor(Math.random()*25);
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
                        setAntiHack(true);



                     }
                     else if((selectedPoke.id== poke1.id && selectedPoke.id==poke2.id)
                     || (selectedPoke.id == poke2.id && selectedPoke.id ==poke3.id)
                     || (selectedPoke.id == poke3.id && selectedPoke == poke1.id))
                     
                     {
                        console.log(`selected: ${selectedPoke.id} poke1:${poke1.id}, poke2: ${poke2.id}, poke3:${poke3.id}`)
                        setScore(prevScore => prevScore+200);
                        setShowScore(true);
                        setAntiHack(true);

                        setResult(<div> Almost perfect! You score 200 points and Pikachu likes you! </div>)
                     }

                     else if(selectedPoke.id== poke1.id
                        ||selectedPoke.id == poke2.id
                        ||selectedPoke.id == poke3.id)
                     {
                        console.log(`selected: ${selectedPoke.id} poke1:${poke1.id}, poke2: ${poke2.id}, poke3:${poke3.id}`)
                        setScore(prevScore => prevScore+100)
                        setShowScore(true);
                        setAntiHack(true);
                        setResult(<div> Not bad! You score 100 points and Pikachu appreciates your contribution.</div>)
                     }
                     else {
                        console.log(`selected: ${selectedPoke.id} poke1:${poke1.id}, poke2: ${poke2.id}, poke3:${poke3.id}`)
                        setScore(prevScore => prevScore -50);
                        setShowScore(true);
                        setAntiHack(true);

                        setResult(<div> You lost! You loose -50 points and Pikachu is very disappointed with you!</div>)
                     }
              
            }
         
            
// When you click on 'send your score'... 


const sendScore = async (event)=>{
   event.preventDefault()
   const newScore = {
      name: value,
      pokename: selectedPoke.name, 
      win: false, //because you can NEVER win at gambling :D 
      score:score,
      numberofrolls: `${roll}`
    };

   const options = {
     method: 'POST',
     body: JSON.stringify(newScore),
     headers: {
       'Content-Type': 'application/json'
     }
   }
   try {
     const response = await fetch("https://poke-fights-app.herokuapp.com/fights", options)
     const data = await response.json()
     setUserFeedback(data);
   } catch (error) {console.log(error)}
   window.location.reload()
}


//! start of return statement 

   return (
   <Box align="center">
      {userFeedback?<p> your score has been submitted!</p>:console.log('no userfeedback')}

      <Heading> Hi {value}, choose your Pokemon! </Heading>
      <input hidden={antiHack} type="submit" value="GET A RANDOM POKEMON" className="pokeball" onClick={getPoke}/>

      {/* When you click on 'get a pokemon' for the first time.... */}
      {selectedPoke
      ?
         (<div className="pokemon-player"> 
         <img src={selectedPoke.sprites.other["official-artwork"].front_default} /> <br/>
            <div>
            <h2 className="titlecenter">You got {selectedPoke.name} </h2>
            <p>Click on the button and try your luck</p>
            <input hidden={antiHack} type="submit" value ="ROLL" className="buttontop" onClick={getRoll}/>
            </div>
            
         </div>)
      :<p></p>
      } 


      {/* When you click on 'roll for the first time.... */}

      {poke1&&roll>0
      ?
         (<div className="poke-enemy-img">
            <img src={poke1.sprites.other["official-artwork"].front_default}/>
            <img src={poke2.sprites.other["official-artwork"].front_default}/>
            <img src={poke3.sprites.other["official-artwork"].front_default}/>
            <br/>  <br/>
         <div className="button-swscore"><input hidden={showScore} type="submit" value="Show your Score" className="buttontop" onClick={calculateResult}/></div>
         </div>)
         :<span></span>}
         

      {/* When you click on 'showscore */}
      {showScore?
         (<div className="buttonposition"><PokeOutcome 

            setResult={setResult} 
            result={result} 
            setScore={setScore} 
            score={score} 
            roll={roll}/>
            <div className="button-down-roll">
            <input type="submit" value ="Roll Again" className="buttontop" onClick={getRoll}/>
            </div>
            <div className="button-down-roll">
               <form onSubmit={sendScore}> 
              <input type="submit" className="buttontop" value="SEND YOUR SCORE"/> 
               </form>
            </div>
         
      
         </div>
         )
      :<span></span>}
      {/* } */}
   
   {/* <PokeCard/> <PokeArena/></span>):<p>Loading</p>} */}
   
   </Box>     
   )
}

export default Game