import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './exercicio01/App'
// import AppPages from './AppPages';
import Counter from './Counter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppPages /> */}
    <Counter />
  </React.StrictMode>
);