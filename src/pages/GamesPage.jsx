import React from 'react';
import { Link } from 'react-router-dom';

const GamesPage = () => {
  const navStyle = {
    backgroundColor: 'white',
    padding: '15px 25px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  };
  
  const navLinkStyle = {
    color: '#1f2937',
    marginRight: '32px',
    position: 'relative',
    textDecoration: 'none'
  };
  
  const headerStyle = {
    textAlign: 'center',
    padding: '40px 20px',
    backgroundColor: '#f0f0f0'
  };
  
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px'
  };
  
  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'box-shadow 0.3s ease'
  };
  
  const cardImageStyle = {
    height: '192px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div>
      {/* Navigation */}
      <nav style={navStyle}>
        <div style={{ fontWeight: 'bold', fontSize: '20px', color: '#1f2937' }}>Jessica</div>
        <div>
          <Link to="/" style={navLinkStyle}>Home</Link>
          <Link to="/about" style={navLinkStyle}>About</Link>
          <Link to="/projects" style={navLinkStyle}>Projects</Link>
          <Link to="/games" style={{ ...navLinkStyle, borderBottom: '2px solid #6366f1' }}>Jessica's Games</Link>
          <Link to="/contact" style={navLinkStyle}>Contact</Link>
        </div>
      </nav>

      {/* Header */}
      <header style={headerStyle}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '10px' }}>Jessica's Games</h1>
        <p style={{ fontSize: '18px', color: '#4b5563' }}>A collection of web-based puzzles and games I've created</p>
      </header>
      
      {/* Games Grid */}
      <div style={containerStyle}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
          {/* Game 1: Color Matching */}
          <div style={cardStyle}>
            <div style={{ ...cardImageStyle, background: 'linear-gradient(to right, #6366f1, #a855f7)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: '#ef4444', borderRadius: '6px' }}></div>
                <div style={{ width: '48px', height: '48px', backgroundColor: '#10b981', borderRadius: '6px' }}></div>
                <div style={{ width: '48px', height: '48px', backgroundColor: '#3b82f6', borderRadius: '6px' }}></div>
              </div>
            </div>
            <div style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>Color Match</h3>
              <p style={{ color: '#4b5563', marginBottom: '16px' }}>Match the target color by adjusting RGB values. How close can you get?</p>
              <Link to="/games/color-match" style={{ color: '#6366f1', fontWeight: '500' }}>Play now →</Link>
            </div>
          </div>
          
          {/* Game 2: Coming Soon */}
          <div style={cardStyle}>
            <div style={{ ...cardImageStyle, background: 'linear-gradient(to right, #3b82f6, #14b8a6)' }}>
              <span style={{ color: 'white', fontSize: '18px', fontWeight: '500' }}>Coming Soon</span>
            </div>
            <div style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>Word Ladder</h3>
              <p style={{ color: '#4b5563', marginBottom: '16px' }}>Transform one word into another by changing just one letter at a time.</p>
              <span style={{ color: '#9ca3af', fontWeight: '500' }}>Coming soon...</span>
            </div>
          </div>
          
          {/* Game 3: Coming Soon */}
          <div style={cardStyle}>
            <div style={{ ...cardImageStyle, background: 'linear-gradient(to right, #fbbf24, #f97316)' }}>
              <span style={{ color: 'white', fontSize: '18px', fontWeight: '500' }}>Coming Soon</span>
            </div>
            <div style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>Pattern Echo</h3>
              <p style={{ color: '#4b5563', marginBottom: '16px' }}>Test your memory by repeating increasingly complex patterns.</p>
              <span style={{ color: '#9ca3af', fontWeight: '500' }}>Coming soon...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesPage;