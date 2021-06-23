import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route path='/portfolio/:id' component={Project} />
          <Route path='/' component={Home} exact />
        </Switch>
        
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
