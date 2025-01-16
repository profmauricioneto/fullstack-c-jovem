import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Greeting from "./components/firstComponent";
import CalculateAge from './components/calculateAge';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Greeting name="Mauricio" surname="Moreira" />
  <CalculateAge birthYear={1990}/> 
  </React.StrictMode>
);