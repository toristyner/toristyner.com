import React, { Component } from 'react'
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
    console.log(getPlaces())
    this.setState({
      places: getPlaces(),
    })
  }

  render() {
    return (
      <div className="column">
        <div>Table of Contents</div>
        {this.state.places.map(item => (
          <ListItem key={`toc-${item.id}`} {...item} />
        ))}
      </div>
    )
  }
}

export default TableOfContents
