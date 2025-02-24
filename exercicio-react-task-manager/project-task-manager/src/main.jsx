import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TaskList from './components/TaskList'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskList />
  </StrictMode>,
)
