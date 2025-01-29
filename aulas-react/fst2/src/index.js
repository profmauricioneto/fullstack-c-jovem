import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './exercicio01/App'
// import AppPages from './AppPages';
// import Counter from './Counter';
// import Cadastrar from './components/Cadastrar';
import GetApiData from './components/GetAPIComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppPages /> */}
    {/* <Counter /> */}
    {/* <Cadastrar /> */}
    <GetApiData />
  </React.StrictMode>
);