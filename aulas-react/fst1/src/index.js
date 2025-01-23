import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './Counter';
// import AppPages from './AppPages';
// import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter />
    {/* <App />     */}
    {/* <AppPages /> */}
  </React.StrictMode>
);

