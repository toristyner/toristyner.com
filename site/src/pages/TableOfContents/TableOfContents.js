import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getPlaces } from '../../services/placeService'
import { ListItem } from './'

class TableOfContents extends Component {
  constructor() {
    super()
    this.state = {
      places: [],
    }
  }

  componentDidMount = () => {
    this.setState({
      places: getPlaces(),
    })
  }

  render() {
    return (
      <div className="column">
        <div>Table of Contents</div>
        {this.state.places.map(item => (
          <Link key={`toc-${item.id}`} to={`${item.id}`}>
            <ListItem {...item} />
          </Link>
        ))}
      </div>
    )
  }
}

export default TableOfContents
