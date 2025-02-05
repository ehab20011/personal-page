import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from './components/navbar';
import './App.css';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Helmet>
            <title>Ehab's Codeverse</title>
          </Helmet>
          <Navbar />
          <AnimatedRoutes />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
