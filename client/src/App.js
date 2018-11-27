import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Articles from './pages/Articles';
import Nav from './components/Nav';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Route
          path="/articles"
          render={props => (
            <Articles {...props} username={this.state.username} />
          )}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
