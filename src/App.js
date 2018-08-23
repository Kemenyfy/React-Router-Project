import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Breadcrumbs from './Components/Breadcrumbs'
import CategoryList from './Components/CategoryList'
import PhotoList from './Components/PhotoList'
import PhotoDetail from './Components/PhotoDetail'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className='Header'>
              <h1>Things that I like</h1>
              <h5>A Photo Gallery made by somebody/somehow/maybe</h5>
            {/* <Breadcrumbs/> */}
          </header>  
          <Switch>
            <Route path="/" exact component={CategoryList} />
            <Route path="/page1" exact component={PhotoList} />
            <Route path="/page2" exact component={PhotoDetail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;