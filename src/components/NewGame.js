import React, { useState } from 'react';
import Game from './Game'

/* components */
import Player from './player'

const NewGame = () => {
const [value, setValue] = useState(''); // username, passed as props to Player and Game



    return (
        <React.Fragment>
        
            {/* in this components we create a player witch will be passed to the next component called ?Game? */}
            <Player value={value} setValue={setValue}/>  
        {value?
           <Game value={value}/>
           :<p></p>}
 
        </React.Fragment>
    );
}; 

export default NewGame;

