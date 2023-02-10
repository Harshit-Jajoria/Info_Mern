import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Edit from './components/Edit';
import Home from './components/Home';

const App = () => {
  
  return (
    
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/edit/:id" element={<Edit />}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
