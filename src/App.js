import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import TopNav from './components/TopNav';
import Landing from './pages/Landing';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <TopNav />
      <Landing />
      <Footer />
    </Router>
  );
}

export default App;
