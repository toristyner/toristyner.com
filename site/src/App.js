import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Detail, Map, TableOfContents, Home } from './pages'
import './App.scss'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/trips" exact component={TableOfContents} />
          <Route path="/trips/:tripId" exact component={Map} />
          <Route path="/trips/:tripId/:placeId" exact component={Detail} />
        </div>
      </Router>
    )
  }
}

export default App
