import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './screens/Home';
import Footer from './components/Footer';
import Project from './screens/Project';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <Route path='/portfolio/:id' component={Project} />
        <Route path='/' component={Home} exact />
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
