import LoginPortal from './LoginPortal.jsx'
import Page1 from './Page1'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<LoginPortal />} />
        <Route path="/feed" element={<Page1 />} />
      </Routes>
    </Router>

  );
}

export default App;