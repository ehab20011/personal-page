import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HomePage from './components/homepage';
import Navbar from './components/navbar';
import AnsysPage from './components/ansys';
import ProjectsPage from './components/projects';
import HackathonsPage from './components/hackathons';

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>Ehab's Codeverse</title>
        </Helmet>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ansys" element={<AnsysPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/Hackathons" element={<HackathonsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
