import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// My Routes
import HomePage from './homepage';
import AnsysPage from './ansys';
import ProjectsPage from './projects';
import HackathonsPage from './hackathons';
import MobotPage from './mobot';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={1000}           // Duration of animations in ms
        classNames="page"      // Base class for CSS
        unmountOnExit
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/ansys" element={<AnsysPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/Hackathons" element={<HackathonsPage />} />
          <Route path="/mobot" element={<MobotPage />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default AnimatedRoutes;
