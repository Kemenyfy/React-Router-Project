import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import CategoryList from './Components/CategoryList'
import Nav from './Components/Nav'
import Page1 from './Components/Page1'
import Page2 from './Components/Page2'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={CategoryList} />
            <Route path="/page1" exact component={Page1} />
            <Route path="/page2" exact component={Page2} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;