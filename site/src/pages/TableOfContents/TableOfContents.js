import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getTrips } from '../../services/placeService'
import { ListItem } from './'

class TableOfContents extends Component {
  constructor() {
    super()
    this.state = {
      trips: [],
    }
  }

  componentDidMount = () => {
    this.setState({
      trips: getTrips(),
    })
  }

  render() {
    return (
      <div className="column">
        <div>Table of Contents</div>
        {this.state.trips.map(item => (
          <Link key={`toc-${item.id}`} to={`${item.id}`}>
            <ListItem {...item} />
          </Link>
        ))}
      </div>
    )
  }
}

export default TableOfContents
