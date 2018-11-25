import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Detail, MapView, TableOfContents } from './pages'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={TableOfContents} />
          <Route path="/:tripId" exact component={MapView} />
          <Route path="/:tripId/:placeId" exact component={Detail} />
        </div>
      </Router>
    )
  }
}

export default App
