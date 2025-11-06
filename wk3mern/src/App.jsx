import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import TasksPage from './pages/TasksPage';
import ApiPage from './pages/ApiPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
     <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/api" element={<ApiPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
