import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import TaskList from './components/TaskList';
import './main.css';
import App from './newcomponents/App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
