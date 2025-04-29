import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const navLinkStyle = {
    color: '#1f2937',
    marginRight: '2rem',
    position: 'relative',
    textDecoration: 'none'
  };
  
  const heroStyle = {
    padding: '5rem 1.5rem',
    background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
    color: 'white'
  };
  
  const sectionStyle = {
    padding: '4rem 1.5rem',
    backgroundColor: 'white'
  };
  
  const gamesStyle = {
    padding: '4rem 1.5rem',
    backgroundColor: '#f9fafb'
  };
  
  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'box-shadow 0.3s ease'
  };
  
  const cardImageStyle = {
    height: '12rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  
  const footerStyle = {
    backgroundColor: '#1f2937',
    color: 'white',
    padding: '3rem 1.5rem'
  };

  return (
    <>
      {/* Navigation */}
      <nav style={{ backgroundColor: 'white', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.25rem', color: '#1f2937' }}>Jessica</div>
        <div>
          <Link to="/" style={{ ...navLinkStyle, borderBottom: '2px solid #6366f1' }}>Home</Link>
          <Link to="/about" style={navLinkStyle}>About</Link>
          <Link to="/projects" style={navLinkStyle}>Projects</Link>
          <Link to="/games" style={navLinkStyle}>Jessica's Games</Link>
          <Link to="/contact" style={navLinkStyle}>Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={heroStyle}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>Hi, I'm Jessica</h1>
            <p style={{ fontSize: '1.125rem', opacity: '0.9', marginBottom: '1.5rem' }}>
                NYC-based Software engineer, web developer, puzzle enthusiast, and creative problem solver.
                <br></br>
                Passionate about creating communities to cultivate friendships and help others.
            </p>
            <button style={{ backgroundColor: 'white', color: '#6366f1', padding: '0.5rem 1.5rem', borderRadius: '0.375rem', border: 'none', fontWeight: '500' }}>Get in touch</button>
          </div>
          <div>
            <img src="https://i.postimg.cc/TwndmwKS/image.png" alt="Jessica" style={{ width: '16rem', height: '16rem', borderRadius: '50%', border: '4px solid white', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }} />
          </div>
        </div>
      </section>

      {/* Short Bio Section */}
      <section style={sectionStyle}>
        <div style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>About Me</h2>
          <p style={{ fontSize: '1.125rem', color: '#4b5563', marginBottom: '2rem' }}>
            I'm a full-stack software engineer based in NYC with a passion for creating interactive full-stack web experiences and simply just having fun with my passion.
            I love designing and building web applications that are both beautiful and functional.
            When I'm not coding, you can find me creating puzzles and games that challenge the mind.
          </p>
          <Link to="/about" style={{ color: '#6366f1', fontWeight: '500' }}>Learn more about me →</Link>
        </div>
      </section>

      {/* Games Preview Section */}
      <section style={gamesStyle}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem', textAlign: 'center' }}>Jessica's Games</h2>
          <p style={{ fontSize: '1.125rem', color: '#4b5563', marginBottom: '3rem', textAlign: 'center' }}>A collection of web-based puzzles and games I've created and programmed.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(20rem, 1fr))', gap: '2rem' }}>
            {/* Game 1: Color Matching */}
            <div style={cardStyle}>
              <div style={{ ...cardImageStyle, background: 'linear-gradient(to right, #6366f1, #a855f7)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                  <div style={{ width: '3rem', height: '3rem', backgroundColor: '#ef4444', borderRadius: '0.375rem' }}></div>
                  <div style={{ width: '3rem', height: '3rem', backgroundColor: '#10b981', borderRadius: '0.375rem' }}></div>
                  <div style={{ width: '3rem', height: '3rem', backgroundColor: '#3b82f6', borderRadius: '0.375rem' }}></div>
                </div>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>Color Match</h3>
                <p style={{ color: '#4b5563', marginBottom: '1rem' }}>Match the target color by adjusting RGB values. How close can you get?</p>
                <Link to="/games/color-match" style={{ color: '#6366f1', fontWeight: '500' }}>Play now →</Link>
              </div>
            </div>
            
            {/* Game 2: Coming Soon */}
            <div style={cardStyle}>
              <div style={{ ...cardImageStyle, background: 'linear-gradient(to right, #3b82f6, #14b8a6)' }}>
                <span style={{ color: 'white', fontSize: '1.125rem', fontWeight: '500' }}>Coming Soon</span>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>Word Ladder</h3>
                <p style={{ color: '#4b5563', marginBottom: '1rem' }}>Transform one word into another by changing just one letter at a time.</p>
                <span style={{ color: '#9ca3af', fontWeight: '500' }}>Coming soon...</span>
              </div>
            </div>
            
            {/* Game 3: Coming Soon */}
            <div style={cardStyle}>
              <div style={{ ...cardImageStyle, background: 'linear-gradient(to right, #fbbf24, #f97316)' }}>
                <span style={{ color: 'white', fontSize: '1.125rem', fontWeight: '500' }}>Coming Soon</span>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>Pattern Echo</h3>
                <p style={{ color: '#4b5563', marginBottom: '1rem' }}>Test your memory by repeating increasingly complex patterns.</p>
                <span style={{ color: '#9ca3af', fontWeight: '500' }}>Coming soon...</span>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/games" style={{ display: 'inline-block', backgroundColor: '#6366f1', color: 'white', fontWeight: '500', padding: '0.5rem 1.5rem', borderRadius: '0.375rem' }}>View All Games</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={footerStyle}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Jessica</h2>
              <p style={{ color: '#9ca3af' }}>NYC Software Engineer, Web Developer & Game Designer, Creative Enthusiast
              <br></br><br></br>
                Passionate about creating communities to cultivate friendships and help others.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
              <a href="https://github.com" style={{ color: '#9ca3af' }}>
                <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com" style={{ color: '#9ca3af' }}>
                <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://instagram.com" style={{ color: '#9ca3af' }}>
                <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
          <hr style={{ borderColor: '#374151', margin: '2rem 0' }} />
          <p style={{ textAlign: 'center', color: '#9ca3af' }}>© 2025 Jessica. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default HomePage;