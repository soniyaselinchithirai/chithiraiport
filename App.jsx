import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './Splash.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show splash screen for 2.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="splash-screen">
        <h1 className="splash-name text-center">SONIYA SELIN CHITHIRAI</h1>
        <div className="splash-loader"></div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;