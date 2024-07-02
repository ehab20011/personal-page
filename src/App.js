import React from 'react';
import { Helmet } from 'react-helmet';
import HomePage from './components/homepage';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Ehab's Codeverse</title>
      </Helmet>
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
