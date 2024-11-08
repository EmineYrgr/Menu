import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import Desserts from './pages/Desserts';
import FoodDetail from './pages/FoodDetail'; 
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/foods/:id" element={<FoodDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
