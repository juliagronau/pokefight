import React, { useState } from 'react';


/* components */
import Player from './player'

const NewGame = () => {
    


    return (
        <React.Fragment>
        
            {/* in this components we create a player witch will be passed to the next component called ?Game? */}
            <Player />  

           {/*  <Game /> */}
 
        </React.Fragment>
    );
}; 

export default NewGame;

