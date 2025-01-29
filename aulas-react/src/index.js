import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import FirstComponent from './FirstComponent';
// import Greeting from './Greeting';
// import { Hello, BirthCalculator } from './ManyComponents';
// import Counter from './Counter';
import GetAPIData from './GetAPIDataComponent';

// import Cadastro from './Cadastro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <FirstComponent />
    <Greeting name="Mauricio Neto" />
    <Hello name="Mauricio Neto" />
    <BirthCalculator age={34} /> */}
    {/* <Counter /> */}
    <GetAPIData />
    {/* <Cadastro /> */}
  </React.StrictMode>
);

