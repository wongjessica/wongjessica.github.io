import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ColorMatchingGame = () => {
  // Game state
  const [targetColor, setTargetColor] = useState({ r: 0, g: 0, b: 0 });
  const [userColor, setUserColor] = useState({ r: 128, g: 128, b: 128 });
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');
  const [gameLevel, setGameLevel] = useState(1);
  const [shiftAmount, setShiftAmount] = useState(15);

  // Generate a random color for the target
  const generateRandomColor = () => {
    return {
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256)
    };
  };

  // Start a new game
  const startGame = () => {
    setTargetColor(generateRandomColor());
    setUserColor({ r: 128, g: 128, b: 128 }); // Start with a neutral gray
    setGameStarted(true);
    setMessage('');
    setScore(0);
  };

  // Calculate the difference between two colors (lower is better)
  const calculateColorDifference = (color1, color2) => {
    return Math.sqrt(
      Math.pow(color1.r - color2.r, 2) +
      Math.pow(color1.g - color2.g, 2) +
      Math.pow(color1.b - color2.b, 2)
    );
  };

  // Shift a color channel value within 0-255 range
  const shiftColorValue = (value, shift) => {
    return Math.max(0, Math.min(255, value + shift));
  };

  // Handle color block clicks
  const handleColorBlockClick = (channel, direction) => {
    const shift = direction * shiftAmount;
    
    setUserColor(prevColor => ({
      ...prevColor,
      [channel]: shiftColorValue(prevColor[channel], shift)
    }));
  };

  // Check if user's color matches the target
  const checkMatch = () => {
    const difference = calculateColorDifference(targetColor, userColor);
    const maxDifference = Math.sqrt(3 * Math.pow(255, 2)); // Maximum possible difference
    
    // Calculate score as a percentage (100% is perfect match)
    const matchPercentage = 100 - Math.round((difference / maxDifference) * 100);
    setScore(matchPercentage);
    
    if (matchPercentage >= 95) {
      setMessage('Perfect match! Amazing job!');
      // Increase difficulty for next round
      setGameLevel(prev => prev + 1);
      setShiftAmount(prev => Math.max(5, prev - 2)); // Decrease shift amount (min 5)
    } else if (matchPercentage >= 90) {
      setMessage('Excellent match! Very close!');
    } else if (matchPercentage >= 80) {
      setMessage('Good match! Keep fine-tuning!');
    } else if (matchPercentage >= 70) {
      setMessage('Not bad! Keep trying!');
    } else {
      setMessage('Keep adjusting the colors to get closer!');
    }
  };

  // RGB to hex conversion for displaying colors
  const rgbToHex = ({ r, g, b }) => {
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  };

  // Reset game with new target color
  const nextRound = () => {
    setTargetColor(generateRandomColor());
    setUserColor({ r: 128, g: 128, b: 128 });
    setMessage('');
  };

  return (
    <>
      <nav style={{ backgroundColor: 'white', padding: '15px 25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
        <div style={{ fontWeight: 'bold', fontSize: '20px', color: '#1f2937' }}>Jessica</div>
        <div>
          <Link to="/" style={{ color: '#1f2937', marginRight: '32px', position: 'relative', textDecoration: 'none' }}>Home</Link>
          <Link to="/about" style={{ color: '#1f2937', marginRight: '32px', position: 'relative', textDecoration: 'none' }}>About</Link>
          <Link to="/projects" style={{ color: '#1f2937', marginRight: '32px', position: 'relative', textDecoration: 'none' }}>Projects</Link>
          <Link to="/games" style={{ color: '#1f2937', marginRight: '32px', position: 'relative', textDecoration: 'none' }}>Jessica's Games</Link>
          <Link to="/contact" style={{ color: '#1f2937', marginRight: '32px', position: 'relative', textDecoration: 'none' }}>Contact</Link>
        </div>
      </nav>
      
      <div className="game-container">
        <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>Color Matching Game</h1>
        
        {!gameStarted ? (
          <div style={{ textAlign: 'center' }}>
            <p style={{ marginBottom: '1.5rem', color: '#4b5563' }}>Match the target color by adjusting RGB values. How close can you get?</p>
            <button 
              onClick={startGame}
              style={{
                padding: '0.5rem 1.5rem',
                backgroundColor: '#6366f1',
                color: 'white',
                borderRadius: '0.375rem',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Start Game
            </button>
          </div>
        ) : (
          <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div 
                  className="color-display"
                  style={{ backgroundColor: rgbToHex(targetColor) }}
                ></div>
                <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>Target Color</span>
                <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>{rgbToHex(targetColor)}</span>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div 
                  className="color-display"
                  style={{ backgroundColor: rgbToHex(userColor) }}
                ></div>
                <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>Your Color</span>
                <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>{rgbToHex(userColor)}</span>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
              {['r', 'g', 'b'].map(channel => (
                <div key={channel} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '0.5rem' }}>
                    <button 
                      onClick={() => handleColorBlockClick(channel, -1)}
                      style={{
                        width: '2.5rem',
                        height: '2.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#e5e7eb',
                        borderRadius: '0.375rem',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      -
                    </button>
                    <div 
                      className="color-block"
                      style={{
                        backgroundColor: channel === 'r' ? '#ef4444' : channel === 'g' ? '#10b981' : '#3b82f6'
                      }}
                    ></div>
                    <button 
                      onClick={() => handleColorBlockClick(channel, 1)}
                      style={{
                        width: '2.5rem',
                        height: '2.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#e5e7eb',
                        borderRadius: '0.375rem',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      +
                    </button>
                  </div>
                  <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>
                    {channel.toUpperCase()}: {userColor[channel]}
                  </span>
                </div>
              ))}
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.5rem' }}>
              <button 
                onClick={checkMatch}
                style={{
                  padding: '0.5rem 1.5rem',
                  backgroundColor: '#6366f1',
                  color: 'white',
                  borderRadius: '0.375rem',
                  marginBottom: '1rem',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Check Match
              </button>
              
              {message && <p style={{ textAlign: 'center', color: '#4b5563', marginBottom: '0.5rem' }}>{message}</p>}
              
              {score > 0 && (
                <div style={{ width: '100%', marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: '#4b5563', marginBottom: '0.25rem' }}>
                    <span>0%</span>
                    <span>Match Score: {score}%</span>
                    <span>100%</span>
                  </div>
                  <div className="score-bar">
                    <div 
                      className="score-progress"
                      style={{ width: `${score}%` }}
                    ></div>
                  </div>
                </div>
              )}
              
              {score >= 90 && (
                <button 
                  onClick={nextRound}
                  style={{
                    padding: '0.5rem 1.5rem',
                    backgroundColor: '#10b981',
                    color: 'white',
                    borderRadius: '0.375rem',
                    marginTop: '1rem',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Next Color Challenge
                </button>
              )}
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.875rem', color: '#4b5563' }}>
                <span style={{ fontWeight: '500' }}>Level:</span> {gameLevel}
              </div>
              <div style={{ fontSize: '0.875rem', color: '#4b5563' }}>
                <span style={{ fontWeight: '500' }}>Shift Amount:</span> {shiftAmount}
              </div>
              <button 
                onClick={() => setGameStarted(false)}
                style={{
                  fontSize: '0.875rem',
                  color: '#6b7280',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Reset Game
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ColorMatchingGame;