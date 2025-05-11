import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Portfolio from './pages/Portfolio';
import ForgotPassword from './pages/ForgotPassword';
import Terms from './pages/Terms';
import Marketplace from './pages/Marketplace';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
    </>
  );
}

export default App;
