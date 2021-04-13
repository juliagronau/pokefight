import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


import App from './App';
import './index.scss';

 
import PokeState from './context/context';

ReactDOM.render(
  <React.StrictMode>

    <PokeState> 

      <BrowserRouter>

        <App />
 
      </BrowserRouter>
    </PokeState>
  </React.StrictMode>,
  document.getElementById('root')
);
