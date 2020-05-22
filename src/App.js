import React from 'react';
import './App.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Home from './components/Home'
import Career from './components/Career';
import Competitions from './components/Competitions';
import HigherStudies from './components/HigherStudies';
import PlacementLife from './components/PlacementLife';
import News from './components/News';
import About from './components/About';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <div className="wrapper">
          <Route exact path="/" component={Home}/>
          <Route path="/career-guidance" component={Career}/>
          <Route path="/competitions" component={Competitions}/>
          <Route path="/higher-studies" component={HigherStudies}/>
          <Route path="/post-placement-life" component={PlacementLife}/>
          <Route path="/news" component={News}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
