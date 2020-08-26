import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import Navbar from './components/Navbar';
import Biography from './components/Biography';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/hero" component={Biography} />
            <Route path="/" component={Search} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
