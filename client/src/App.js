import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './screens/Home';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
