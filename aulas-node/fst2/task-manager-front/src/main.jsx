import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import TaskList from './components/TaskList';
import './main.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskList />
  </StrictMode>,
)
