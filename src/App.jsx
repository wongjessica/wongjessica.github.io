import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import ColorMatchingGame from './components/Games/ColorMatchingGame';

// Import basic CSS
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/games/color-match" element={<ColorMatchingGame />} />
        <Route path="*" element={<div style={{padding: '20px'}}>Page Coming Soon</div>} />
      </Routes>
    </Router>
  );
}

export default App;